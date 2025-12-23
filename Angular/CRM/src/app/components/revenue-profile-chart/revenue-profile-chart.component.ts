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
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },

      // APPLY FONT HERE
      textStyle: {
        fontFamily: 'IRANSans',
        fontSize: 13, // optional
      },

      formatter: (params: any) => {
        let result = params[0].name + '<br/>';

        params.forEach((p: any) => {
          result +=
            `${p.marker} ${p.seriesName}: ` + persianDigits(p.value) + '<br/>';
        });

        return result;
      },
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
      axisLabel: {
        fontSize: 12,
        fontFamily: 'IRANSans',
        formatter: (val: any) => persianDigits(val),
      },
    },
    legend: {
      data: ['درآمد', 'سود'],
      top: 0,
      textStyle: {
        fontFamily: 'IRANSans',
        fontSize: 13,
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        fontSize: 12,
        fontFamily: 'IRANSans',
        formatter: (value: any) => value,
      },
    },
    series: [
      {
        name: 'درآمد',
        type: 'bar',
        data: [100, 90, 90, 75, 70, 60, 50, 40, 30, 25, 20, 15],
        itemStyle: { color: '#4f5bff' },
        barWidth: '30%',
      },
      {
        name: 'سود',
        type: 'line',
        data: [140, 130, 120, 110, 100, 90, 80, 70, 60, 50, 40, 35],
        smooth: true,
        lineStyle: { color: '#28a745', width: 2 },
        areaStyle: { color: 'rgba(40, 167, 69, 0.1)' },
      },
    ],
  });
}
