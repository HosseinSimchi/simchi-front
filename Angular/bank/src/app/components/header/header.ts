import { Component } from '@angular/core';
import { LOGO_IMG_URL } from '../../../shared/helpers/constant_values';

@Component({
  selector: 'bank-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  LOGO_IMG_URL = LOGO_IMG_URL;
}
