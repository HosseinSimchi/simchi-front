import { Component, input, output } from '@angular/core';

@Component({
  selector: 'saman-load-img',
  imports: [],
  templateUrl: './load-img.component.html',
  styleUrl: './load-img.component.scss',
})
export class LoadImgComponent {
  clicked = output();
  givenLogicImgLoader = input();
  image_path = input();
  image_format = input();
  givenCssClass = input();
  isIconClicked() {
    this.clicked.emit();
  }
}
