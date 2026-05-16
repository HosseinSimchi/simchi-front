import { Routes } from '@angular/router';
import { application_routes } from '../shared/helpers/routes';

export const ApplicationRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/layout/layout').then((m) => m.Layout),
    children: [
      {
        path: '',
        redirectTo: application_routes.DASHBOARD,
        pathMatch: 'full',
      },
      {
        path: application_routes.DASHBOARD,
        loadComponent: () => import('./pages/dashboard/dashboard').then((m) => m.Dashboard),
      },
      {
        path: application_routes.TRANSACTIONS,
        loadComponent: () =>
          import('./pages/transactions/transactions').then((m) => m.Transactions),
      },
      {
        path: application_routes.ACCOUNTS,
        loadComponent: () => import('./pages/accounts/accounts').then((m) => m.Accounts),
      },
      {
        path: application_routes.INVESTMENTS,
        loadComponent: () => import('./pages/investments/investments').then((m) => m.Investments),
      },
      {
        path: application_routes.CREDIT_CARDS,
        loadComponent: () => import('./pages/credit-cards/credit-cards').then((m) => m.CreditCards),
      },
      {
        path: application_routes.LOANS,
        loadComponent: () => import('./pages/loans/loans').then((m) => m.Loans),
      },
      {
        path: application_routes.SERVICES,
        loadComponent: () => import('./pages/services/services').then((m) => m.Services),
      },
      {
        path: application_routes.MY_PRIVILAGES,
        loadComponent: () =>
          import('./pages/my-privilages/my-privilages').then((m) => m.MyPrivilages),
      },
      {
        path: application_routes.SETTINGS,
        loadComponent: () => import('./pages/settings/settings').then((m) => m.Settings),
      },
    ],
  },
];
