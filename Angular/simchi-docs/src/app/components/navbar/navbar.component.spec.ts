import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

fdescribe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;

    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Shallow Integration Tests', () => {
    it('<span .navbar-items-texts />- should render the tag based on the navbar_items property', () => {
      const tags = el.queryAll(By.css('.navbar-items-texts'));

      expect(tags.length).toBe(8);
    });

    it('<span .navbar-items-texts />- should bind the tags with correct textContent based on the navbar_items property', () => {
      const tags = el.queryAll(By.css('.navbar-items-texts'));

      expect(tags[0].nativeElement.textContent).toContain('داشبورد');
      expect(tags[1].nativeElement.textContent).toContain('حساب');
      expect(tags[2].nativeElement.textContent).toContain('انرژی');
      expect(tags[3].nativeElement.textContent).toContain('خدمات');
      expect(tags[4].nativeElement.textContent).toContain('پول');
      expect(tags[5].nativeElement.textContent).toContain('کاربری');
      expect(tags[6].nativeElement.textContent).toContain('پویش‌ها');
      expect(tags[7].nativeElement.textContent).toContain('خروج');
    });
  });
});
