import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { recentActivityFeature } from '../../store/states/recent-activities/recent-activities.reducer';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../../../shared/components/button/button.component";

@Component({
  selector: 'app-recent-activities',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './recent-activities.component.html',
  styleUrl: './recent-activities.component.scss',
})
export class RecentActivitiesComponent {
  store = inject(Store);

  selectActivityList$ = this.store.select(
    recentActivityFeature.selectActivityList
  );
}
