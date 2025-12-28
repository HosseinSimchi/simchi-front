import {
  Component,
  inject,
  input,
  OnDestroy,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import * as echarts from 'echarts';
import { CHART_OPTIONS } from './options';
import { Observable, Subscription } from 'rxjs';
import { ThemeMode } from '../../../app/store/states/theme/theme.state';
import { themeFeature } from '../../../app/store/states/theme/theme.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-charts',
  imports: [],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
})
export class ChartsComponent implements OnInit, AfterViewInit, OnDestroy {
  chartId = input<string>('');
  chartInfo = input<any>();
  store = inject(Store);

  myChart: echarts.ECharts | null = null;
  themeSubscription: Subscription | null = null;

  private chartOptions: any;
  private currentTheme: ThemeMode = 'light';

  ngOnInit(): void {
    // Subscribe to theme changes
    this.themeSubscription = this.store
      .select(themeFeature.selectMode)
      .subscribe({
        next: (theme: ThemeMode) => {
          this.onThemeChange(theme);
        },
        error: (err) => console.error('Theme subscription error:', err),
      });
  }

  ngAfterViewInit(): void {
    // Initialize chart with current theme
    this.initializeChart();
  }

  private initializeChart(): void {
    const chartDom = document.getElementById(this.chartId());

    if (!chartDom) {
      console.warn(`Chart DOM element with id ${this.chartId()} not found`);
      return;
    }

    // Dispose existing chart if any
    if (this.myChart) {
      this.myChart.dispose();
    }

    // Initialize chart with current theme
    this.myChart = echarts.init(chartDom, this.currentTheme);

    // Prepare chart options
    this.prepareChartOptions();

    // Set options
    if (this.myChart && this.chartOptions) {
      this.myChart.setOption(this.chartOptions, true); // Use 'true' to not merge with previous options
      this.myChart.resize();
    }
  }

  private prepareChartOptions(): void {
    if (!this.chartInfo()) return;

    // Start with fresh options each time
    this.chartOptions = { ...CHART_OPTIONS };

    // Merge with input chart info
    const chartInfo = this.chartInfo();
    Object.keys(chartInfo).forEach((key) => {
      if (chartInfo[key] !== undefined) {
        this.chartOptions[key] = chartInfo[key];
      }
    });

    // Apply theme-specific styling - IMPORTANT: This resets styles for both themes
    this.applyThemeSpecificStyling();
  }

  private applyThemeSpecificStyling(): void {
    // Common text styles that need to be theme-aware
    const textStyle = {
      color: this.currentTheme === 'dark' ? '#fff' : '#333',
    };

    const axisLabelStyle = {
      color: this.currentTheme === 'dark' ? '#fff' : '#333',
    };

    const axisLineStyle = {
      lineStyle: {
        color: this.currentTheme === 'dark' ? '#555' : '#ccc',
      },
    };

    const splitLineStyle = {
      lineStyle: {
        color: this.currentTheme === 'dark' ? '#444' : '#eee',
      },
    };

    // Apply global text style
    this.chartOptions.textStyle = textStyle;

    // Apply to title
    if (this.chartOptions.title) {
      if (!this.chartOptions.title.textStyle) {
        this.chartOptions.title.textStyle = {};
      }
      this.chartOptions.title.textStyle.color = textStyle.color;

      // Handle subtitle
      if (this.chartOptions.title.subtextStyle) {
        this.chartOptions.title.subtextStyle.color =
          this.currentTheme === 'dark' ? '#ccc' : '#666';
      }
    }

    // Apply to legend
    if (this.chartOptions.legend) {
      if (!this.chartOptions.legend.textStyle) {
        this.chartOptions.legend.textStyle = {};
      }
      this.chartOptions.legend.textStyle.color = textStyle.color;
    }

    // Apply to xAxis
    if (this.chartOptions.xAxis) {
      this.applyAxisStyling(
        this.chartOptions.xAxis,
        axisLabelStyle,
        axisLineStyle,
        splitLineStyle
      );
    }

    // Apply to yAxis
    if (this.chartOptions.yAxis) {
      this.applyAxisStyling(
        this.chartOptions.yAxis,
        axisLabelStyle,
        axisLineStyle,
        splitLineStyle
      );
    }

    // Apply to angleAxis (for polar charts)
    if (this.chartOptions.angleAxis) {
      this.applyAxisStyling(
        this.chartOptions.angleAxis,
        axisLabelStyle,
        axisLineStyle,
        splitLineStyle
      );
    }

    // Apply to radiusAxis (for polar charts)
    if (this.chartOptions.radiusAxis) {
      this.applyAxisStyling(
        this.chartOptions.radiusAxis,
        axisLabelStyle,
        axisLineStyle,
        splitLineStyle
      );
    }

    // Apply tooltip styling
    if (this.chartOptions.tooltip) {
      if (!this.chartOptions.tooltip.backgroundColor) {
        this.chartOptions.tooltip.backgroundColor =
          this.currentTheme === 'dark'
            ? 'rgba(50, 50, 50, 0.7)'
            : 'rgba(255, 255, 255, 0.9)';
      }
      if (!this.chartOptions.tooltip.textStyle) {
        this.chartOptions.tooltip.textStyle = {};
      }
      this.chartOptions.tooltip.textStyle.color =
        this.currentTheme === 'dark' ? '#fff' : '#333';
      this.chartOptions.tooltip.borderColor =
        this.currentTheme === 'dark' ? '#555' : '#ddd';
    }

    // Set background color
    if (!this.chartOptions.backgroundColor) {
      this.chartOptions.backgroundColor =
        this.currentTheme === 'dark' ? 'transparent' : '#fff';
    }
  }

  private applyAxisStyling(
    axisConfig: any,
    labelStyle: any,
    lineStyle: any,
    splitLineStyle: any
  ): void {
    if (Array.isArray(axisConfig)) {
      axisConfig.forEach((axis) =>
        this.styleSingleAxis(axis, labelStyle, lineStyle, splitLineStyle)
      );
    } else {
      this.styleSingleAxis(axisConfig, labelStyle, lineStyle, splitLineStyle);
    }
  }

  private styleSingleAxis(
    axis: any,
    labelStyle: any,
    lineStyle: any,
    splitLineStyle: any
  ): void {
    // Apply axis label color
    if (!axis.axisLabel) {
      axis.axisLabel = {};
    }
    axis.axisLabel.color = labelStyle.color;

    // Apply axis line color
    if (!axis.axisLine) {
      axis.axisLine = {};
    }
    axis.axisLine.lineStyle = {
      ...axis.axisLine.lineStyle,
      ...lineStyle.lineStyle,
    };

    // Apply split line color
    if (!axis.splitLine) {
      axis.splitLine = {};
    }
    axis.splitLine.lineStyle = {
      ...axis.splitLine.lineStyle,
      ...splitLineStyle.lineStyle,
    };

    // Apply minor split line if exists
    if (axis.minorSplitLine && axis.minorSplitLine.lineStyle) {
      axis.minorSplitLine.lineStyle.color =
        this.currentTheme === 'dark' ? '#333' : '#f0f0f0';
    }
  }

  private onThemeChange(newTheme: ThemeMode): void {
    if (newTheme !== this.currentTheme) {
      this.currentTheme = newTheme;

      // Force complete recreation of chart with new theme
      this.initializeChart();
    }
  }

  ngOnDestroy(): void {
    // Clean up
    if (this.myChart) {
      this.myChart.dispose();
      this.myChart = null;
    }

    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
}
