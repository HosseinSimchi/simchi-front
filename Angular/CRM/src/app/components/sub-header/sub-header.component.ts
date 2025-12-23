import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { subHeaderFeature } from '../../store/states/sub-header/sub-header.reducer';

@Component({
  selector: 'app-sub-header',
  imports: [CommonModule],
  templateUrl: './sub-header.component.html',
  styleUrl: './sub-header.component.scss',
})
export class SubHeaderComponent {
  store = inject(Store);
  subHeaderInfoItems$ = this.store.select(subHeaderFeature.selectSubHeaderState);
}
