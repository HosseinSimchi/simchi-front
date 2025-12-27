import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SubHeaderComponent } from '../sub-header/sub-header.component';
import { ChartsSectionComponent } from '../charts-section/charts-section.component';
import { OrderChartComponent } from '../order-chart/order-chart.component';
import { RevenueProfileChartComponent } from '../revenue-profile-chart/revenue-profile-chart.component';
import { PipelineRadialChartComponent } from '../pipeline-radial-chart/pipeline-radial-chart.component';
import { RecentActivitiesComponent } from '../recent-activities/recent-activities.component';
import { GlobalHeatMapComponent } from '../global-heat-map/global-heat-map.component';
import { GetKnowUsComponent } from '../get-know-us/get-know-us.component';
import { TransactionStatusTableComponent } from '../transaction-status-table/transaction-status-table.component';

@Component({
  selector: 'app-layout',
  imports: [
    HeaderComponent,
    SubHeaderComponent,
    ChartsSectionComponent,
    OrderChartComponent,
    RevenueProfileChartComponent,
    PipelineRadialChartComponent,
    RecentActivitiesComponent,
    GlobalHeatMapComponent,
    GetKnowUsComponent,
    TransactionStatusTableComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  
}
