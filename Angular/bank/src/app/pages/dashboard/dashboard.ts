import { Component, ElementRef, input, ViewChild } from '@angular/core';
import * as Prism from 'prismjs';

// optional languages
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-python';
@Component({
  selector: 'bank-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  code = input<string>('const tag = 1;');
  language = input<string>('typescript');

  @ViewChild('codeBlock') codeBlock!: ElementRef;

  ngAfterViewInit() {
    Prism.highlightElement(this.codeBlock.nativeElement);
  }
}
