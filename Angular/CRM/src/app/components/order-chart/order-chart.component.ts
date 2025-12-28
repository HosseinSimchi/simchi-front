import { Component, signal } from '@angular/core';
import { ChartsComponent } from '../../../shared/components/charts/charts.component';
import { persianDigits } from '../../../shared/helpers/toPersianNumber';

@Component({
  selector: 'app-order-chart',
  imports: [ChartsComponent],
  templateUrl: './order-chart.component.html',
  styleUrl: './order-chart.component.scss',
})
export class OrderChartComponent {
  orderChartInfo = signal<any>({
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
        shadowStyle: {
          color: 'rgba(150, 150, 150, 0.1)',
        },
      },
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#ddd',
      borderWidth: 1,
      textStyle: {
        fontFamily: 'IRANSans, Tahoma, sans-serif',
        fontSize: 12,
        color: '#333',
        lineHeight: 20,
      },
      extraCssText:
        'direction: rtl; text-align: right; padding: 10px; border-radius: 8px;',
      formatter: (params: any) => {
        let result = `<div style="font-family: IRANSans; direction: rtl; text-align: right;">
        <strong style="font-size: 13px;">${persianDigits(
          params[0].name
        )}</strong><br/>
        <div style="margin-top: 8px;">`;

        params.forEach((p: any) => {
          const persianValue = persianDigits(p.value.toLocaleString('fa-IR'));
          result += `
          <div style="display: flex; align-items: center; margin-bottom: 4px;">
            <span style="display: inline-block; width: 10px; height: 10px; border-radius: 2px; background-color: ${p.color}; margin-left: 8px;"></span>
            <span style="flex: 1;">${p.seriesName}:</span>
            <span style="font-weight: bold;">${persianValue}</span>
          </div>`;
        });

        // Add total
        const total = params.reduce((sum: number, p: any) => sum + p.value, 0);
        const persianTotal = persianDigits(total.toLocaleString('fa-IR'));
        result += `
          <hr style="border: none; border-top: 1px dashed #ccc; margin: 8px 0;">
          <div style="display: flex; align-items: center;">
            <span style="flex: 1; font-weight: bold;">مجموع:</span>
            <span style="font-weight: bold; color: #2c3e50;">${persianTotal}</span>
          </div>
        </div>
      </div>`;
        return result;
      },
    },

    legend: {
      data: ['سفارش‌های تکمیل‌شده', 'سفارش‌های در انتظار', 'سفارش‌های لغوشده'],
      top: 0,
      right: 'center',
      textStyle: {
        fontFamily: 'IRANSans, Tahoma, sans-serif',
        fontSize: 12,
        fontWeight: 'normal',
        color: '#333',
      },
      itemWidth: 14,
      itemHeight: 10,
      itemGap: 25,
      itemStyle: {
        borderWidth: 0,
      },
      borderRadius: 4,
    },

    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '12%',
      containLabel: true,
    },

    xAxis: {
      type: 'category',
      data: [
        'یکشنبه',
        'شنبه',
        'جمعه',
        'پنج‌شنبه',
        'چهارشنبه',
        'سه‌شنبه',
        'دوشنبه',
      ],
      axisLine: {
        lineStyle: {
          color: '#ddd',
          width: 1,
        },
      },
      axisTick: {
        alignWithLabel: true,
        lineStyle: {
          color: '#ddd',
        },
      },
      axisLabel: {
        fontSize: 12,
        fontFamily: 'IRANSans, Tahoma, sans-serif',
        color: '#666',
        margin: 10,
        formatter: (val: any) => persianDigits(val),
      },
      splitLine: {
        show: false,
      },
      boundaryGap: true,
    },

    yAxis: {
      type: 'value',
      name: 'تعداد سفارش',
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
          width: 1,
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: '#ddd',
        },
      },
      axisLabel: {
        fontSize: 11,
        fontFamily: 'IRANSans, Tahoma, sans-serif',
        color: '#666',
        formatter: (value: any) => {
          // Convert to Persian digits
          return persianDigits(value.toString());
        },
      },
      splitLine: {
        lineStyle: {
          color: '#f5f5f5',
          type: 'solid',
        },
      },
      splitNumber: 6,
    },

    series: [
      {
        name: 'سفارش‌های تکمیل‌شده',
        type: 'bar',
        stack: 'total',
        data: [320, 280, 240, 190, 220, 180, 150],
        barWidth: '45%',
        itemStyle: {
          color: '#1CA347',
          borderRadius: [4, 4, 0, 0],
          borderWidth: 0,
        },
        label: {
          show: false,
          position: 'top',
          fontFamily: 'IRANSans, Tahoma, sans-serif',
          fontSize: 11,
          color: '#1CA347',
          formatter: (params: any) => persianDigits(params.value.toString()),
        },
        emphasis: {
          focus: 'series',
          itemStyle: {
            shadowBlur: 8,
            shadowColor: 'rgba(28, 163, 71, 0.3)',
            borderWidth: 0,
          },
        },
      },
      {
        name: 'سفارش‌های در انتظار',
        type: 'bar',
        stack: 'total',
        data: [50, 60, 80, 70, 100, 90, 60],
        barWidth: '45%',
        itemStyle: {
          color: '#FF8F00',
          borderRadius: [0, 0, 0, 0],
          borderWidth: 0,
        },
        label: {
          show: false,
          position: 'top',
          fontFamily: 'IRANSans, Tahoma, sans-serif',
          fontSize: 11,
          color: '#FF8F00',
          formatter: (params: any) => persianDigits(params.value.toString()),
        },
        emphasis: {
          focus: 'series',
          itemStyle: {
            shadowBlur: 8,
            shadowColor: 'rgba(255, 143, 0, 0.3)',
            borderWidth: 0,
          },
        },
      },
      {
        name: 'سفارش‌های لغوشده',
        type: 'bar',
        stack: 'total',
        data: [20, 10, 30, 15, 20, 25, 10],
        barWidth: '45%',
        itemStyle: {
          color: '#E53935',
          borderRadius: [0, 0, 4, 4],
          borderWidth: 0,
        },
        label: {
          show: false,
          position: 'top',
          fontFamily: 'IRANSans, Tahoma, sans-serif',
          fontSize: 11,
          color: '#E53935',
          formatter: (params: any) => persianDigits(params.value.toString()),
        },
        emphasis: {
          focus: 'series',
          itemStyle: {
            shadowBlur: 8,
            shadowColor: 'rgba(229, 57, 53, 0.3)',
            borderWidth: 0,
          },
        },
      },
    ],

    // Add animation
    animation: true,
    animationDuration: 1000,
    animationEasing: 'cubicOut',
    animationDelay: (idx: number) => idx * 100,
  });
}
