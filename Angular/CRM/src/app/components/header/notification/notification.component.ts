import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { notificationFeature } from '../../../store/states/notification/notification.reducer';

@Component({
  selector: 'app-notification',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent {
  store = inject(Store);

  notificationState$ = this.store.select(
    notificationFeature.selectNotificationState
  );
}
