import { Component, signal } from '@angular/core';
import { ChartsComponent } from '../../../shared/components/charts/charts.component';
import { persianDigits } from '../../../shared/helpers/toPersianNumber';

@Component({
  selector: 'app-get-know-us',
  imports: [ChartsComponent],
  templateUrl: './get-know-us.component.html',
  styleUrl: './get-know-us.component.scss',
})
export class GetKnowUsComponent {
  persianDegits = persianDigits
  getKnowUsInfo = signal<any>({
    tooltip: {
      trigger: 'item',
      textStyle: {
        fontFamily: 'IRANSans',
        fontSize: 13,
      },
      extraCssText: `
      direction: rtl;
      text-align: right;
      font-family: IRANSans;
    `,
      formatter: (params: any) => {
        return `
        <div>
          <strong>${params.name}</strong><br/>
          مقدار: ${persianDigits(params.value)}٪<br/>
        </div>
      `;
      },
    },
    series: [
      {
        type: 'pie',
        radius: '70%',
        label: { show: false },
        labelLine: { show: false },
        itemStyle: {
          borderColor: '#ffffff',
          borderWidth: 2,
        },
        data: [
          {
            value: 34.69,
            name: 'جستجوی ارگانیک',
            itemStyle: { color: '#5b4ae2' },
          },
          {
            value: 24.41,
            name: 'رسانه های اجتماعی',
            itemStyle: { color: '#1e90ff' },
          },
          {
            value: 17.98,
            name: 'کمپین های ایمیل',
            itemStyle: { color: '#ff8c1a' },
          },
          { value: 12.04, name: 'ارجاع', itemStyle: { color: '#2faa4a' } },
          {
            value: 10.87,
            name: 'ترافیک مستقیم',
            itemStyle: { color: '#e9302a' },
          },
        ],
      },
    ],
  });
}
