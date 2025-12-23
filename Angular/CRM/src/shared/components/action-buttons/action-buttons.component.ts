import { Component } from '@angular/core';

@Component({
  selector: 'app-action-buttons',
  imports: [],
  templateUrl: './action-buttons.component.html',
  styleUrl: './action-buttons.component.scss',
})
export class ActionButtonsComponent {
  btnDataInfo: any[] = [
    {
      css: 'btn-icon btn-success-light',
      icon_name: 'ri-eye-line',
    },
    {
      css: 'btn-icon btn-info-light',
      icon_name: 'ri-edit-line',
    },
    {
      css: 'btn-icon btn-danger-light',
      icon_name: 'ri-delete-bin-line',
    },
  ];
}
