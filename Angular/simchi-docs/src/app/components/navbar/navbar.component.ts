import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
  OnInit,
  DestroyRef,
} from '@angular/core';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

import { application_routes } from '../../../shared/helpers/routes';
import { TranslatePipe } from '../../../shared/Pipe/translate/translate.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuItemsComponent } from './menu-items/menu-items.component';

@Component({
  selector: 'simchi-docs-navbar',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    TranslatePipe,
    MenuItemsComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  // ========================
  // Dependencies
  // ========================
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  // ========================
  // Public Properties
  // ========================

  @Input() isOpen = true;
  @Output() isOpenChange = new EventEmitter<boolean>();

  // ========================
  // Public Methods
  // ========================
  toggleSidebar(): void {
    this.isOpenChange.emit(!this.isOpen);
  }
}
