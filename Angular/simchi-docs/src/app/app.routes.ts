import { Routes } from '@angular/router';
import { application_routes } from '../shared/helpers/routes';

export const ApplicationRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/layout/layout').then((m) => m.Layout),
    children: [
      {
        path: '',
        redirectTo: application_routes.MACHINE_LEARNING_ML_DS,
        pathMatch: 'full',
      },
      {
        path: application_routes.MACHINE_LEARNING_ML_DS,
        loadComponent: () => import('./pages/ml-ds/ml-ds').then((m) => m.MlDs),
      },
      {
        path: application_routes.COMPUTER_VISION_DATAYAD,
        loadComponent: () => import('./pages/cv-datayad/cv-datayad').then((m) => m.CvDatayad),
      },
      {
        path: application_routes.NLP_DATAYAD,
        loadComponent: () => import('./pages/nlp-datayad/nlp-datayad').then((m) => m.NlpDatayad),
      },
      {
        path: application_routes.DATA_ENGINEERING_DANESHKAR_2025,
        loadComponent: () =>
          import('./pages/data-engineering-daneshkar-2025/data-engineering-daneshkar-2025').then(
            (m) => m.DataEngineeringDaneshkar2025,
          ),
      },
      {
        path: application_routes.GEN_AI_DANESHKAR_2025,
        loadComponent: () =>
          import('./pages/gen-ai-daneshkar-2025/gen-ai-daneshkar-2025').then(
            (m) => m.GenAiDaneshkar2025,
          ),
      },
      {
        path: application_routes.PYTHON,
        loadComponent: () => import('./pages/python/python').then((m) => m.Python),
      },
      {
        path: application_routes.JAVA_SCRIPT,
        loadComponent: () => import('./pages/js/js').then((m) => m.Js),
      },
      {
        path: application_routes.REACT_CONCEPTS,
        loadComponent: () =>
          import('./pages/react-tutorial/react-tutorial').then((m) => m.ReactTutorial),
      },
      {
        path: application_routes.CI_CD_GIT,
        loadComponent: () => import('./pages/git/git').then((m) => m.Git),
      },
      {
        path: application_routes.CI_CD_DEPLOYMENT,
        loadComponent: () => import('./pages/deployment/deployment').then((m) => m.Deployment),
      },
      {
        path: application_routes.ANGULAR_TESTS,
        loadComponent: () =>
          import('./pages/angular-tests/angular-tests').then((m) => m.AngularTests),
      },
      {
        path: application_routes.ANGULAR_TUTORIAL,
        loadComponent: () =>
          import('./pages/angular-tutorial/angular-tutorial').then((m) => m.AngularTutorial),
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
