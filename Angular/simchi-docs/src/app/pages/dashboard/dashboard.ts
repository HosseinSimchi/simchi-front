import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'bank-dashboard',
  imports: [MarkdownComponent, MarkdownModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  http = inject(HttpClient);
  markdownContent = signal('');

  ngOnInit() {
    this.http
      .get('_storybook.md', {
        responseType: 'text',
      })
      .subscribe({
        next: (content) => {
          this.markdownContent.set(content);
        },
      });
  }
}
