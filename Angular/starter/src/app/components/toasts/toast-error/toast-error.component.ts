import { Component } from '@angular/core';

import { Toast } from 'ngx-toastr';
import { LoadImgComponent } from '../../load-img/load-img.component';

@Component({
  selector: 'saman-toast-error',
  imports: [LoadImgComponent],
  templateUrl: './toast-error.component.html',
  styleUrl: './toast-error.component.scss',
})
export class ToastErrorComponent extends Toast {
  onUndo() {
    // Your logic here
    this.toastPackage.triggerAction(); // Communicate action to the service
    this.remove(); // Close the toast
  }
}
