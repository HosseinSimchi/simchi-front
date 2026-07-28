import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoadImgComponent } from '../load-img/load-img.component';

export interface NavigationItem {
  title: string;
  description?: string;
  route: string;
  icon?: string;
}

export interface NavigationColumn {
  title: string;
  description?: string;
  items: NavigationItem[];
}

export interface NavigationMenu {
  label: string;
  route?: string;
  megaMenu?: NavigationColumn[];
}

@Component({
  selector: 'simchi-docs-header',
  standalone: true,
  imports: [CommonModule, RouterModule, LoadImgComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private readonly elementRef = inject(ElementRef);

  readonly openedMenu = signal<string | null>(null);
  readonly isMobileMenuOpen = signal(false);

  readonly navigation: NavigationMenu[] = [
    {
      label: 'Frontend',
      megaMenu: [
        {
          title: 'ReactJS',
          items: [
            {
              title: 'Installation and Setup',
              route: '/react-installation',
            },
            {
              title: 'Best Practice Structure',
              route: '/react-bp-structure',
            },
            {
              title: 'Academic Tutorials',
              route: '/react-academic-tutorial',
            },
            {
              title: 'Css',
              route: '/react-css',
            },
            {
              title: 'Conditions and Loops',
              route: '/react-condition-and-loops',
            },
            {
              title: 'JS Usefull Methods',
              route: '/react-js-usefull-methods',
            },
            {
              title: 'Props',
              route: '/react-props',
            },
            {
              title: 'Hooks',
              route: '/react-hooks',
            },
            {
              title: 'Routers',
              route: '/react-routers',
            },
            {
              title: 'High Order Component (HOC)',
              route: '/react-hoc',
            },
            {
              title: 'Context',
              route: '/react-context',
            },
            {
              title: 'Portal',
              route: '/react-portal',
            },
            {
              title: 'Container Presenter Pattern',
              route: '/react-container-presenter-pattern',
            },
            {
              title: 'Redux',
              route: '/react-redux',
            },
            {
              title: 'Redux Toolkit',
              route: '/react-redux-toolkit',
            },
            {
              title: 'Interview',
              route: '/react-interview',
            },
            {
              title: 'Unit tests',
              route: '/react-unit-tests',
            },
            {
              title: 'Interview Questions',
              route: '/react-interview-questions',
            },
          ],
        },
        {
          title: 'ReactJS Libraries',
          items: [
            {
              title: 'Axios',
              route: '/react-axios',
            },
            {
              title: 'Formik',
              route: '/react-formik',
            },
            {
              title: 'Google ReCAPTCHA',
              route: '/react-google-recaptcha',
            },
            {
              title: 'Lodash',
              route: '/react-lodash',
            },
            {
              title: 'React Hook Form',
              route: '/react-hook-form',
            },
            {
              title: 'React Query',
              route: '/react-query',
            },
            {
              title: 'React i18next',
              route: '/react-i18next',
            },
            {
              title: 'Recharts',
              route: '/react-recharts',
            },
            {
              title: 'SMS',
              route: '/react-sms',
            },
            {
              title: 'React Icons',
              route: '/react-icons',
            },
          ],
        },
        {
          title: 'Angular',
          items: [
            {
              title: 'Installation and Setup',
              route: '/ng-installation',
            },
            {
              title: 'Best Practice Structure',
              route: '/ng-bp-structure',
            },
            {
              title: 'State Management',
              route: '/ng-state-management',
            },
            {
              title: 'Components',
              route: '/ng-components',
            },
            {
              title: 'Signals',
              route: '/ng-signals',
            },
            {
              title: 'Templates',
              route: '/ng-tempaltes',
            },
            {
              title: 'Css',
              route: '/ng-css',
            },
            {
              title: 'Services',
              route: '/ng-services',
            },
            {
              title: 'Routes',
              route: '/ng-routes',
            },
            {
              title: 'Guards',
              route: '/ng-guards',
            },
            {
              title: 'Interceptors',
              route: '/ng-interceptors',
            },
            {
              title: 'Unit tests',
              route: '/ng-unit-tests',
            },
            {
              title: 'Interview Questions',
              route: '/ng-interview-questions',
            },
          ],
        },
      ],
    },

    {
      label: 'Backend',
      megaMenu: [
        {
          title: 'NestJS',
          items: [
            // {
            //   title: 'API',
            //   description: 'RESTful APIs',
            //   route: '/api',
            // },
          ],
        },
      ],
    },

    {
      label: 'Artificial Intelligence',
      megaMenu: [
        {
          title: 'Machine Learning',
          items: [
            // {
            //   title: 'About',
            //   route: '/about',
            // },
          ],
        },
        {
          title: 'Deep Learning',
          items: [
            // {
            //   title: 'About',
            //   route: '/about',
            // },
          ],
        },
        {
          title: 'Computer Vision',
          items: [
            // {
            //   title: 'About',
            //   route: '/about',
            // },
          ],
        },
        {
          title: 'Generative AI',
          items: [
            // {
            //   title: 'About',
            //   route: '/about',
            // },
          ],
        },
        {
          title: 'Data Engineering',
          items: [
            // {
            //   title: 'About',
            //   route: '/about',
            // },
          ],
        },
        {
          title: 'Natural Language Processing (NLP)',
          items: [
            // {
            //   title: 'About',
            //   route: '/about',
            // },
          ],
        },
      ],
    },
  ];

  toggleMenu(label: string): void {
    this.openedMenu.update((current) => (current === label ? null : label));
  }

  openMenu(label: string): void {
    this.openedMenu.set(label);
  }

  closeMenu(): void {
    this.openedMenu.set(null);
  }

  isMenuOpen(label: string): boolean {
    return this.openedMenu() === label;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((value) => !value);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  closeMenus(): void {
    this.closeMenu();
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
