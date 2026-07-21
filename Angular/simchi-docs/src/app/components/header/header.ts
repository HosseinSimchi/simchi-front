import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoadImgComponent } from "../load-img/load-img.component";

interface NavigationItem {
  title: string;
  description: string;
  route: string;
  icon?: string;
}

interface NavigationColumn {
  title: string;
  description: string;
  items: NavigationItem[];
}
@Component({
  selector: 'simchi-docs-header',
  imports: [CommonModule, RouterModule, LoadImgComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private readonly elementRef = inject(ElementRef);

  readonly isProductsMenuOpen = signal(false);
  readonly isMobileMenuOpen = signal(false);

  readonly navigationItems = [
    {
      label: 'Features',
      route: '/features',
    },
    {
      label: 'Pricing',
      route: '/pricing',
    },
    {
      label: 'Resources',
      route: '/resources',
    },
  ];

  readonly productColumns: NavigationColumn[] = [
    {
      title: 'Platform',
      description: 'Everything you need to build and grow your business.',
      items: [
        {
          title: 'Analytics',
          description: 'Understand your traffic and performance.',
          route: '/analytics',
          icon: 'analytics',
        },
        {
          title: 'Engagement',
          description: 'Build stronger relationships with customers.',
          route: '/engagement',
          icon: 'engagement',
        },
        {
          title: 'Security',
          description: 'Keep your data protected and secure.',
          route: '/security',
          icon: 'security',
        },
        {
          title: 'Security',
          description: 'Keep your data protected and secure.',
          route: '/security',
          icon: 'security',
        },
        {
          title: 'Security',
          description: 'Keep your data protected and secure.',
          route: '/security',
          icon: 'security',
        },
        {
          title: 'Security',
          description: 'Keep your data protected and secure.',
          route: '/security',
          icon: 'security',
        },
        {
          title: 'Security',
          description: 'Keep your data protected and secure.',
          route: '/security',
          icon: 'security',
        },
        {
          title: 'Security',
          description: 'Keep your data protected and secure.',
          route: '/security',
          icon: 'security',
        },
        {
          title: 'Security',
          description: 'Keep your data protected and secure.',
          route: '/security',
          icon: 'security',
        },
        {
          title: 'Security',
          description: 'Keep your data protected and secure.',
          route: '/security',
          icon: 'security',
        },
        {
          title: 'Security',
          description: 'Keep your data protected and secure.',
          route: '/security',
          icon: 'security',
        },
      ],
    },
    {
      title: 'Solutions',
      description: 'Powerful tools designed for every team.',
      items: [
        {
          title: 'Marketing',
          description: 'Grow your audience and increase conversions.',
          route: '/marketing',
        },
        {
          title: 'Sales',
          description: 'Close deals faster and improve your pipeline.',
          route: '/sales',
        },
        {
          title: 'Customer Success',
          description: 'Build stronger customer relationships.',
          route: '/customer-success',
        },
      ],
    },
    {
      title: 'Resources',
      description: 'Learn, explore, and get inspired.',
      items: [
        {
          title: 'Documentation',
          description: 'Learn how everything works.',
          route: '/documentation',
        },
        {
          title: 'Blog',
          description: 'Insights, news, and product updates.',
          route: '/blog',
        },
        {
          title: 'Tutorials',
          description: 'Step-by-step guides and tutorials.',
          route: '/tutorials',
        },
      ],
    },
    {
      title: 'Company',
      description: 'Get to know our company and our mission.',
      items: [
        {
          title: 'About us',
          description: 'Learn more about our mission.',
          route: '/about',
        },
        {
          title: 'Careers',
          description: 'Join our growing team.',
          route: '/careers',
        },
        {
          title: 'Contact',
          description: 'We would love to hear from you.',
          route: '/contact',
        },
      ],
    },
  ];

  toggleProductsMenu(): void {
    this.isProductsMenuOpen.update((isOpen) => !isOpen);
  }

  closeProductsMenu(): void {
    this.isProductsMenuOpen.set(false);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((isOpen) => !isOpen);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  closeMenus(): void {
    this.closeProductsMenu();
    this.closeMobileMenu();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);

    if (!clickedInside) {
      this.closeMenus();
    }
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    this.closeMenus();
  }
}
