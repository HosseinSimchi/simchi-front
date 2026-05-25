#### How to use

```ts
toastr = inject(ToastrService);

showSuccess() {
  this.toastr.show('Your message', 'Title', {
    toastComponent: ToastErrorComponent,
    timeOut: 5000,
    closeButton: true,
  });
}

ngOnInit() {
  this.showSuccess();
}
```

#### `root.config.ts`

```ts
import { provideToastr } from 'ngx-toastr';
provideToastr({
    positionClass: 'toast-top-center',
  }),
```
