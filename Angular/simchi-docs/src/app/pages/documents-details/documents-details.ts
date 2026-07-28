import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'simchi-docs-documents-details',
  imports: [],
  templateUrl: './documents-details.html',
  styleUrl: './documents-details.css',
})
export class DocumentsDetails {
  private route = inject(ActivatedRoute);

  documents = toSignal(this.route.data.pipe(map((data) => data['documents'])));

  ngOnInit() {
    console.info(this.documents());
  }
}
