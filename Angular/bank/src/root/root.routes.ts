import { Routes } from '@angular/router';
import { ApplicationRoutes } from '../app/app.routes';
import { authGuard } from '../shared/guards/auth/auth.guard';
import { application_routes } from '../shared/helpers/routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: application_routes.AUTH, // Redirect to the login page by default
    pathMatch: 'full',
  },
  {
    path: application_routes.AUTH,
    loadComponent: () => import('../account/account').then((c) => c.Account),
    children: [
      {
        path: '',
        redirectTo: application_routes.AUTH_PHONE_NUMBER,
        pathMatch: 'full',
      },
      {
        path: application_routes.AUTH_PHONE_NUMBER,
        loadComponent: () => import('../account/login/login').then((c) => c.Login),
      },
    ],
  },
  {
    path: application_routes.APP,
    loadComponent: () => import('../app/app').then((c) => c.App),
    canActivate: [authGuard],
    children: ApplicationRoutes,
  },
  // {
  //   path: '404',
  //   // component: NotFoundComponent,
  // },
  // {
  //   path: '**',
  //   redirectTo: '404',
  // },
];
