import { Component } from '@angular/core';
import { LOGO_IMG_URL, NAVBAR_ITEMS } from '../../../shared/helpers/constant_values';
import { LoadImgComponent } from "../load-img/load-img.component";

@Component({
  selector: 'bank-navbar',
  imports: [LoadImgComponent],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  LOGO_IMG_URL = LOGO_IMG_URL;
  NAVBAR_ITEMS = NAVBAR_ITEMS;
}
