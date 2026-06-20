import { AfterViewInit, Component, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'simchi-docs-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @ViewChild('typedText', { static: true })
  typedText!: ElementRef<HTMLElement>;

  private typedInstance?: Typed;

  ngAfterViewInit(): void {
    this.typedInstance = new Typed(this.typedText.nativeElement, {
      strings: ['Systems that think, Code that delivers'],
      typeSpeed: 50,
      showCursor: false,
      cursorChar: '',
      loop: false,
    });
  }

  ngOnDestroy(): void {
    this.typedInstance?.destroy();
  }
}
