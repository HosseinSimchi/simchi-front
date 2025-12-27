import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { UserInfoComponent } from './user-info/user-info.component';
import { NotificationComponent } from './notification/notification.component';
import { headerFeature } from '../../store/states/header/header.reducer';
import { ThemeActions } from '../../store/states/theme/theme.actions';
import { Observable } from 'rxjs';
import { themeFeature } from '../../store/states/theme/theme.reducer';
type ThemeMode = 'light' | 'dark';
@Component({
  selector: 'app-header',
  imports: [CommonModule, NotificationComponent, UserInfoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  store = inject(Store);
  theme$!: Observable<ThemeMode>;

  searchPlaceholder$ = this.store.select(headerFeature.selectSearchPlaceholder);
  languageSelection$ = this.store.select(headerFeature.selectLanguageSelection);
  themeMode: ThemeMode = 'light';
  isLight = true;

  ngOnInit() {
    this.store.dispatch(ThemeActions.loadFromStorage());
    this.theme$ = this.store.select(themeFeature.selectMode);
  }

  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error('Fullscreen error:', err);
      });
    } else {
      document.exitFullscreen();
    }
  }

  toggleTheme() {
    this.isLight = !this.isLight;
    this.store.dispatch(
      ThemeActions.setTheme(this.isLight ? { mode: 'light' } : { mode: 'dark' })
    );
  }
}
