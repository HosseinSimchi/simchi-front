import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { UserInfoComponent } from './user-info/user-info.component';
import { NotificationComponent } from './notification/notification.component';
import { headerFeature } from '../../store/states/header/header.reducer';

@Component({
  selector: 'app-header',
  imports: [CommonModule, NotificationComponent, UserInfoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  store = inject(Store);

  searchPlaceholder$ = this.store.select(headerFeature.selectSearchPlaceholder);
  languageSelection$ = this.store.select(headerFeature.selectLanguageSelection);
}
