import { Component, signal } from '@angular/core';
import { ChartsComponent } from '../../../shared/components/charts/charts.component';
import { persianDigits } from '../../../shared/helpers/toPersianNumber';

@Component({
  selector: 'app-revenue-profile-chart',
  imports: [ChartsComponent],
  templateUrl: './revenue-profile-chart.component.html',
  styleUrl: './revenue-profile-chart.component.scss',
})
export class RevenueProfileChartComponent {
  revenueChartInfo = signal<any>({
    // Global text style for entire chart
    textStyle: {
      fontFamily: 'IRANSans, Tahoma, sans-serif',
      fontSize: 13,
    },

    title: {
      textStyle: {
        fontFamily: 'IRANSans, Tahoma, sans-serif',
        fontSize: 14,
      },
      subtextStyle: {
        fontFamily: 'IRANSans, Tahoma, sans-serif',
        fontSize: 12,
      },
    },

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#ddd',
      borderWidth: 1,
      textStyle: {
        fontFamily: 'IRANSans, Tahoma, sans-serif',
        fontSize: 12,
        color: '#333',
      },
      extraCssText: 'direction: rtl; text-align: right;',
      formatter: (params: any) => {
        let result = `<div style="font-family: IRANSans; direction: rtl; text-align: right;">
          <strong>${params[0].name}</strong><br/>`;

        params.forEach((p: any) => {
          const persianValue = persianDigits(p.value.toLocaleString());
          result += `${p.marker} ${p.seriesName}: ${persianValue}<br/>`;
        });

        result += '</div>';
        return result;
      },
    },

    legend: {
      data: ['درآمد', 'سود'],
      top: 0,
      right: 'center',
      textStyle: {
        fontFamily: 'IRANSans, Tahoma, sans-serif',
        fontSize: 13,
        fontWeight: 'normal',
      },
      itemWidth: 12,
      itemHeight: 12,
      itemGap: 20,
    },

    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '15%',
      containLabel: true,
    },

    xAxis: {
      type: 'category',
      data: [
        'آذر',
        'آبان',
        'مهر',
        'شهریور',
        'مرداد',
        'تیر',
        'خرداد',
        'اردیبهشت',
        'فروردین',
        'اسفند',
        'بهمن',
        'دی',
      ],
      axisLine: {
        lineStyle: {
          color: '#ddd',
        },
      },
      axisTick: {
        alignWithLabel: true,
      },
      axisLabel: {
        fontSize: 12,
        fontFamily: 'IRANSans, Tahoma, sans-serif',
        color: '#666',
        formatter: (val: any) => persianDigits(val),
        margin: 10,
      },
      splitLine: {
        show: false,
      },
    },

    yAxis: {
      type: 'value',
      name: 'مقدار (میلیون تومان)',
      nameTextStyle: {
        fontFamily: 'IRANSans, Tahoma, sans-serif',
        fontSize: 11,
        color: '#666',
        padding: [0, 0, 0, 10],
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#ddd',
        },
      },
      axisTick: {
        show: true,
      },
      axisLabel: {
        fontSize: 11,
        fontFamily: 'IRANSans, Tahoma, sans-serif',
        color: '#666',
        formatter: (value: any) => {
          // Add thousand separators and convert to Persian digits
          const formattedValue =
            Math.abs(value) >= 1000
              ? `${persianDigits((value / 1000).toFixed(1))}K`
              : persianDigits(value.toString());
          return formattedValue;
        },
      },
      splitLine: {
        lineStyle: {
          color: '#f0f0f0',
          type: 'dashed',
        },
      },
    },

    series: [
      {
        name: 'درآمد',
        type: 'bar',
        data: [100, 90, 90, 75, 70, 60, 50, 40, 30, 25, 20, 15].map(
          (num) => num * 1000
        ),
        itemStyle: {
          color: '#4f5bff',
          borderRadius: [3, 3, 0, 0],
        },
        barWidth: '40%',
        barGap: '30%',
        label: {
          show: false,
          position: 'top',
          fontFamily: 'IRANSans, Tahoma, sans-serif',
          fontSize: 11,
          formatter: (params: any) =>
            persianDigits(params.value.toLocaleString()),
        },
        emphasis: {
          focus: 'series',
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(79, 91, 255, 0.5)',
          },
        },
      },
      {
        name: 'سود',
        type: 'line',
        data: [140, 130, 120, 110, 100, 90, 80, 70, 60, 50, 40, 35].map(
          (num) => num * 1000
        ),
        smooth: true,
        lineStyle: {
          color: '#28a745',
          width: 3,
          shadowBlur: 4,
          shadowColor: 'rgba(40, 167, 69, 0.3)',
        },
        itemStyle: {
          color: '#28a745',
          borderWidth: 2,
          borderColor: '#fff',
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(40, 167, 69, 0.3)' },
              { offset: 1, color: 'rgba(40, 167, 69, 0.05)' },
            ],
          },
        },
        symbol: 'circle',
        symbolSize: 8,
        label: {
          show: false,
          position: 'top',
          fontFamily: 'IRANSans, Tahoma, sans-serif',
          fontSize: 11,
          color: '#28a745',
          formatter: (params: any) =>
            persianDigits(params.value.toLocaleString()),
        },
        emphasis: {
          focus: 'series',
          itemStyle: {
            borderWidth: 3,
            shadowBlur: 8,
            shadowColor: 'rgba(40, 167, 69, 0.5)',
          },
        },
      },
    ],
  });
}
