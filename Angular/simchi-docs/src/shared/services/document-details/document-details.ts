import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentDetails {
  httpClient = inject(HttpClient);

  getMarkdowndata(name: string): Observable<string> {
    return this.httpClient.get(`${name}.md`, {
      responseType: 'text',
    });
  }
}
