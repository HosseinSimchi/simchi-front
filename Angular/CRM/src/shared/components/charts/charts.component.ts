import { Component, input } from '@angular/core';
import * as echarts from 'echarts';
import { CHART_OPTIONS } from './options';

@Component({
  selector: 'app-charts',
  imports: [],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
})
export class ChartsComponent {
  chartId = input<string>('');
  chartInfo = input<any>();

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const chartDom = document.getElementById(this.chartId())!;

    if (chartDom) {
      const myChart = echarts.init(chartDom);

      const option = CHART_OPTIONS;

      option.tooltip = this.chartInfo().tooltip;

      option.legend = this.chartInfo().legend;

      option.xAxis = this.chartInfo()?.xAxis ?? undefined;

      option.yAxis = this.chartInfo()?.yAxis ?? undefined;

      option.angleAxis = this.chartInfo()?.angleAxis ?? undefined;
      option.radiusAxis = this.chartInfo()?.radiusAxis ?? undefined;

      option.polar = this.chartInfo()?.polar ?? undefined;

      option.geo = this.chartInfo()?.geo ?? undefined;
      option.series = this.chartInfo().series;

      myChart.setOption(option);
    }
  }
}
