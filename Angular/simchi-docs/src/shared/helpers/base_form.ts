import { inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

export abstract class BaseForm {
  formType: 'edit' | 'insert' = 'insert';
  form!: FormGroup;
  canBuildform: boolean = true;

  _formBuilder = inject(FormBuilder);

  constructor() {
    if (this.canBuildform) this.form = this.buildForm();
  }

  protected abstract buildForm(): FormGroup;

  isInvalid(controlName: string): boolean {
    const control = this.form.get(controlName);
    return control ? control.invalid && control.touched : false;
  }

  markAllAsTouched(): void {
    Object.keys(this.form.controls).forEach((controlName) => {
      const control = this.form.get(controlName);

      if (control) {
        control.markAsTouched();
      }
    });
  }

  resetForm(): void {
    this.form.reset();
  }

  getCtrl(name: string) {
    return this.form.controls[name] as FormControl;
  }
}
