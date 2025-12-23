import { Component, signal } from '@angular/core';
import { ChartsComponent } from '../../../shared/components/charts/charts.component';
import { persianDigits } from '../../../shared/helpers/toPersianNumber';
import { color } from 'echarts';

@Component({
  selector: 'app-pipeline-radial-chart',
  imports: [ChartsComponent],
  templateUrl: './pipeline-radial-chart.component.html',
  styleUrl: './pipeline-radial-chart.component.scss',
})
export class PipelineRadialChartComponent {
  pipelineRadialChartInfo = signal<any>({
    tooltip: {
      trigger: 'item',
      textStyle: {
        fontFamily: 'IRANSans',
        fontSize: 13,
      },
      formatter: (p: any) => {
        return `${p.data.name}: ${persianDigits(p.data.value)}٪`;
      },
    },

    legend: {
      data: ['واجد شرایط', 'مذاکره', 'وانت', 'چشم‌انداز'],
      bottom: 0,
      textStyle: {
        fontFamily: 'IRANSans',
        fontSize: 13,
      },
    },
    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1],
      },
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [
          { value: 27.5, name: 'واجد شرایط', itemStyle: { color: '#3F51B5' } },
          { value: 25, name: 'مذاکره', itemStyle: { color: '#FF9800' } },
          { value: 20, name: 'وانت', itemStyle: { color: '#4CAF50' } },
          { value: 27.5, name: 'چشم‌انداز', itemStyle: { color: '#2196F3' } },
        ].sort(function (a, b) {
          return a.value - b.value;
        }),
        roseType: 'radius',
        label: {
          color: 'rgba(255, 255, 255, 0.3)',
        },
        labelLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.3)',
          },
          smooth: 0.2,
          length: 10,
          length2: 20,
        },
        itemStyle: {
          color: '#c23531',
          shadowBlur: 200,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function (idx: any) {
          return Math.random() * 200;
        },
      },
    ],
  });
}
