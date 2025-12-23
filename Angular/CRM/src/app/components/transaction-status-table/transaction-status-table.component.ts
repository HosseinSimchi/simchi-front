import { Component } from '@angular/core';
import { persianDigits } from '../../../shared/helpers/toPersianNumber';
import { ActionButtonsComponent } from "../../../shared/components/action-buttons/action-buttons.component";

@Component({
  selector: 'app-transaction-status-table',
  imports: [ActionButtonsComponent],
  templateUrl: './transaction-status-table.component.html',
  styleUrl: './transaction-status-table.component.scss',
})
export class TransactionStatusTableComponent {
  tableHeaderNames: any[] = [
    'شناسه معامله',
    'مشتری',
    'تاریخ شروع',
    'ارزش',
    'وضعیت',
    'نماینده فروش',
    'تاریخ اختتامیه',
    'عمل',
  ];

  tableData: any[] = [
    {
      identity_number: '#DL-1001',
      company_src: 'assets/images/company/company-thumb-001.png',
      compnay_name: 'شرکت Acme',
      start_date: persianDigits('1400-05-15').replaceAll('-', '/'),
      fee: persianDigits('125،000'),
      status_name: 'بسته وون',
      status_css_class: 'badge bg-label-success',
      sales_name: 'سارا جانسون',
      sales_src: 'assets/images/avatar/avatar-thumb-001.webp',
      end_data: persianDigits('1400-06-20').replaceAll('-', '/'),
    },
    {
      identity_number: '#DL-1002',
      company_src: 'assets/images/company/company-thumb-002.png',
      compnay_name: 'شرکت Globex',
      start_date: persianDigits('1400-06-01').replaceAll('-', '/'),
      fee: persianDigits('85،500'),
      status_name: 'مذاکره',
      status_css_class: 'badge bg-label-warning',
      sales_name: 'مایکل چن',
      sales_src: 'assets/images/avatar/avatar-thumb-002.webp',
      end_data: persianDigits('1400-07-15').replaceAll('-', '/'),
    },
    {
      identity_number: '#DL-1003',
      company_src: 'assets/images/company/company-thumb-003.png',
      compnay_name: 'سیستم های TechTron',
      start_date: persianDigits('1400-06-10').replaceAll('-', '/'),
      fee: persianDigits('210،000'),
      status_name: 'پیشنهاد ارسال شده',
      status_css_class: 'badge bg-label-info',
      sales_name: 'امیلی رودریگز',
      sales_src: 'assets/images/avatar/avatar-thumb-003.webp',
      end_data: persianDigits('1400-07-30').replaceAll('-', '/'),
    },
    {
      identity_number: '#DL-1004',
      company_src: 'assets/images/company/company-thumb-004.png',
      compnay_name: 'راه حل های Innova',
      start_date: persianDigits('1400-05-28').replaceAll('-', '/'),
      fee: persianDigits('45000'),
      status_name: 'گمشده',
      status_css_class: 'badge bg-label-danger',
      sales_name: 'دیوید ویلسون',
      sales_src: 'assets/images/avatar/avatar-thumb-004.webp',
      end_data: persianDigits('1400-06-25').replaceAll('-', '/'),
    },
    {
      identity_number: '#DL-1005',
      company_src: 'assets/images/company/company-thumb-005.png',
      compnay_name: 'صنایع راس',
      start_date: persianDigits('1400-06-15').replaceAll('-', '/'),
      fee: persianDigits('175،000'),
      status_name: 'واجد شرایط',
      status_css_class: 'badge bg-label-primary',
      sales_name: 'جسیکا لی',
      sales_src: 'assets/images/avatar/avatar-thumb-005.webp',
      end_data: persianDigits('1400-08-10').replaceAll('-', '/'),
    },
  ];
}
