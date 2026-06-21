import { Component, DestroyRef, ElementRef, inject, model, signal, ViewChild } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { LoadImgComponent } from '../../load-img/load-img.component';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '../../../../shared/Pipe/translate/translate.pipe';
import { NavbarItems } from '../../../../shared/interfaces/navbar/interfaces';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { application_routes } from '../../../../shared/helpers/routes';
@Component({
  selector: 'simchi-docs-menu-items',
  imports: [
    MatSidenavModule,
    MatButtonModule,
    LoadImgComponent,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    TranslatePipe,
  ],
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.scss',
})
export class MenuItemsComponent {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  isOpen = model();
  @ViewChild('menuContainer') menuContainer!: ElementRef;

  handleSubmenuClick(event: Event, index: number): void {
    event.stopPropagation();

    // Get the clicked element
    const clickedElement = event.currentTarget as HTMLElement;

    // Get the container
    const container = this.menuContainer?.nativeElement;
    if (!container) return;

    // Calculate position to scroll to
    const elementRect = clickedElement.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // Calculate scroll position to center the clicked item
    const scrollTop =
      container.scrollTop +
      elementRect.top -
      containerRect.top -
      containerRect.height / 2 +
      elementRect.height / 2;

    // Smooth scroll to the element
    container.scrollTo({
      top: Math.max(0, scrollTop),
      behavior: 'smooth',
    });
  }

  readonly navbar_items = signal<NavbarItems[]>([
    this.createNavItem('ml', 'Machine Learning', '', true, [
      // {
      //   id: 1,
      //   name: 'صورت حساب من',
      //   path: '',
      // },
      // {
      //   id: 2,
      //   name: 'تاریخچه پرداخت‌ها',
      //   path: '',
      // },
    ]),
    this.createNavItem('dl', 'Deep Learning', '', true, [
      // {
      //   id: 1,
      //   name: 'خرید بسته جدید',
      //   path: '',
      // },
      // {
      //   id: 2,
      //   name: 'بسته‌ جاری من',
      //   path: '',
      // },
      // {
      //   id: 3,
      //   name: 'تاریخچه بسته‌ها',
      //   path: '',
      // },
    ]),
    this.createNavItem('cv', 'Computer Vision', '', true, [
      // {
      //   id: 1,
      //   name: 'خدمات',
      //   path: '',
      // },
      // {
      //   id: 2,
      //   name: 'درخواست‌های من',
      //   path: '',
      // },
    ]),
    this.createNavItem('nlp', 'Natural Language Processing', application_routes.WALLET, true),
    this.createNavItem('data', 'Data Engineering', application_routes.METERS_MANAGEMENT, true),
    this.createNavItem('py', 'Python', application_routes.CAMPAIGN, true),
    this.createNavItem('js', 'Java Script', '', true),
    this.createNavItem('react', 'React Js', '', true),
    this.createNavItem('angular', 'Angular', '', true),
    this.createNavItem('ci_cd', 'DevOps', '', true),
    this.createNavItem('logout', 'Logout', application_routes.AUTH, true),
  ]);

  ngOnInit(): void {
    this.syncExpandedItemsWithCurrentRoute();
    this.watchRouteChanges();
  }
  expandedItems = new Set<number>();

  toggleSubMenu(index: number, event: Event): void {
    event.stopPropagation();
    this.expandedItems.has(index)
      ? this.expandedItems.delete(index)
      : this.expandedItems.add(index);
  }

  isExpanded(index: number): boolean {
    return this.expandedItems.has(index);
  }

  submenuIsSelected = signal(false);

  isSubMenuActive(submenu: NavbarItems['submenu']): boolean {
    return this.isAnySubmenuActive(submenu);
  }

  // navigationService = inject(NavigationService);
  getRouterLink(item: NavbarItems): string | null {
    return item.submenu.length === 0 && item.path !== application_routes.AUTH ? item.path : null;
  }

  onItemClick(item: NavbarItems, index: any, event: Event): void {
    if (item.path === application_routes.AUTH) {
      event.preventDefault();
      // this.navigationService.go_to_auth_page();
      return;
    }

    if (item.submenu.length > 0) {
      this.toggleSubMenu(index, event);
    }
  }
  // ========================
  // Private Helper Methods
  // ========================
  private createNavItem(
    icon: string,
    name: string,
    path: string,
    isActive: boolean = true,
    submenu: any[] = [],
  ): NavbarItems {
    return { name, icon, path, isActive, submenu };
  }

  private watchRouteChanges(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => this.syncExpandedItemsWithCurrentRoute());
  }

  isParentOrChildActive(item: NavbarItems, index: number): boolean {
    // Check if parent path is active
    if (this.isMatch(item.path)) {
      return true;
    }

    // Check if any submenu item is active
    return this.isAnySubmenuActive(item.submenu);
  }

  // Update existing isRouteActive method to be more precise
  isRouteActive(routePath: string): boolean {
    return this.isMatch(routePath);
  }

  private syncExpandedItemsWithCurrentRoute(): void {
    this.navbar_items().forEach((item, index) => {
      if (this.isAnySubmenuActive(item.submenu)) {
        this.expandedItems.add(index);
      }
    });
  }

  private isAnySubmenuActive(submenu?: NavbarItems['submenu']): boolean {
    return submenu?.some((item) => this.isMatch(item.path)) ?? false;
  }

  private normalizeUrl(url: string): string {
    const parts = url.split('/').filter(Boolean);
    if (parts[0] === 'saman') parts.shift();
    return '/' + parts.join('/');
  }

  private currentUrl(): string {
    return this.normalizeUrl(this.router.url.split('?')[0]);
  }

  private isMatch(targetPath: string): boolean {
    const current = this.currentUrl();
    const normalized = this.normalizeUrl(targetPath);
    return current === normalized || current.startsWith(normalized + '/');
  }
}
