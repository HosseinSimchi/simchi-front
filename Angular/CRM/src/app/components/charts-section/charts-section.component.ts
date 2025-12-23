import { Component } from '@angular/core';
import { OrderChartComponent } from '../order-chart/order-chart.component';
import { RevenueProfileChartComponent } from '../revenue-profile-chart/revenue-profile-chart.component';

@Component({
  selector: 'app-charts-section',
  imports: [OrderChartComponent, RevenueProfileChartComponent],
  templateUrl: './charts-section.component.html',
  styleUrl: './charts-section.component.scss',
})
export class ChartsSectionComponent {}
