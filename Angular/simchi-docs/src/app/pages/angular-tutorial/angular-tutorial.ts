import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';

interface NotebookCell {
  cell_type: 'markdown' | 'code' | 'raw';
  source: string[];
  metadata?: Record<string, unknown>;
  outputs?: unknown[];
}

interface Notebook {
  cells: NotebookCell[];
  metadata?: Record<string, unknown>;
  nbformat?: number;
  nbformat_minor?: number;
}

@Component({
  selector: 'simchi-docs-angular-tutorial',
  standalone: true,
  imports: [MarkdownComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './angular-tutorial.html',
  styleUrl: './angular-tutorial.css',
})
export class AngularTutorial implements OnInit {
  private http = inject(HttpClient);

  markdownContent = signal<string>('');
  isLoading = signal<boolean>(true);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.loadNotebookContent();
  }

  private loadNotebookContent(): void {
    this.isLoading.set(true);
    this.error.set(null);

    this.http.get<Notebook>('docs/angular/angular.ipynb').subscribe({
      next: (notebook) => {
        try {
          const markdown = this.extractMarkdownFromNotebook(notebook);
          console.log('Extracted markdown:', markdown.substring(0, 500)); // Debug
          this.markdownContent.set(markdown);
          this.isLoading.set(false);
        } catch (err) {
          console.error('Parse error:', err);
          this.handleError('Failed to parse notebook content');
        }
      },
      error: (err) => {
        console.error('Failed to load notebook:', err);
        this.handleError('Failed to load tutorial content');
      },
    });
  }

  private extractMarkdownFromNotebook(notebook: Notebook): string {
    if (!notebook?.cells || !Array.isArray(notebook.cells)) {
      throw new Error('Invalid notebook format');
    }

    const markdownCells = notebook.cells
      .filter(
        (cell): cell is NotebookCell => cell.cell_type === 'markdown' && Array.isArray(cell.source),
      )
      .map((cell) => cell.source.join(''));

    return markdownCells.length > 0
      ? markdownCells.join('\n\n')
      : 'No markdown content found in notebook.';
  }

  private handleError(message: string): void {
    this.error.set(message);
    this.isLoading.set(false);
    this.markdownContent.set(`**Error:** ${message}`);
  }

  retryLoad(): void {
    this.loadNotebookContent();
  }
}
