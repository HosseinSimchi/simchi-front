import { Routes } from '@angular/router';
import { application_routes } from '../shared/helpers/routes';
import { documentDetailsService } from '../shared/resolver/document-details.resolver';

export const ApplicationRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/layout/layout').then((m) => m.Layout),
    children: [
      {
        path: '',
        redirectTo: application_routes.DOCUMENTS,
        pathMatch: 'full',
      },
      {
        path: application_routes.DOCUMENTS,
        loadComponent: () => import('./pages/documents/documents').then((m) => m.Documents),
      },
      {
        path: application_routes.DOCUMENTS_DETAILS,
        loadComponent: () =>
          import('./pages/documents-details/documents-details').then((m) => m.DocumentsDetails),
        resolve: {
          documents: documentDetailsService,
        },
        // canActivate: [walletGuard],
      },
      // {
      //   path: application_routes.ENERGY_PACKAGES,
      //   loadComponent: () =>
      //     import('./pages/energy-packages/energy-packages.component').then(
      //       (m) => m.EnergyPackagesComponent,
      //     ),
      // },
      // {
      //   path: application_routes.SERVICE_REQUEST,
      //   loadComponent: () =>
      //     import('./pages/service-request/service-request.component').then(
      //       (m) => m.ServiceRequestComponent,
      //     ),
      // },
      // {
      //   path: application_routes.WALLET,
      //   loadComponent: () =>
      //     import('./pages/wallet/wallet.component').then(
      //       (m) => m.WalletComponent,
      //     ),
      // },
      // {
      //   path: application_routes.CAMPAIGN,
      //   loadComponent: () =>
      //     import('./pages/campaign/campaign.component').then(
      //       (m) => m.CampaignComponent,
      //     ),
      // },
      // {
      //   path: application_routes.METERS_MANAGEMENT,
      //   loadComponent: () =>
      //     import('./pages/meters-management/meters-management.component').then(
      //       (m) => m.MetersManagementComponent,
      //     ),
      // },
      // {
      //   path: application_routes.USER_ACCOUNT,
      //   loadComponent: () =>
      //     import('./pages/user-account/user-account.component').then(
      //       (m) => m.UserAccountComponent,
      //     ),
      // },
    ],
  },
];
