import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
// import { AuthService } from '../../services/auth/auth.service';
// import { application_routes } from '../../helpers/routes';

export const authGuard: CanActivateFn = (route, state) => {
  // const router = inject(Router);
  // const authService = inject(AuthService);

  // const token = localStorage.getItem(authService.tokenName);

  // if (!token || token.trim() === '') {
  //   router.navigate([`/${application_routes.AUTH}/`]);
  //   return false;
  // }

  return true;
};
