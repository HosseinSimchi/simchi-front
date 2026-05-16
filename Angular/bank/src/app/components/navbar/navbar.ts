import { Component, inject } from '@angular/core';
import { LOGO_IMG_URL, NAVBAR_ITEMS } from '../../../shared/helpers/constant_values';
import { LoadImgComponent } from '../load-img/load-img.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { application_routes } from '../../../shared/helpers/routes';

@Component({
  selector: 'bank-navbar',
  imports: [LoadImgComponent, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  LOGO_IMG_URL = LOGO_IMG_URL;
  NAVBAR_ITEMS = NAVBAR_ITEMS;
  App_Routes = application_routes;

  router = inject(Router);

  navigateWithReplace(path: string) {
    this.router.navigate([path], { replaceUrl: true });
  }
}
