import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvDatayad } from './cv-datayad';

describe('CvDatayad', () => {
  let component: CvDatayad;
  let fixture: ComponentFixture<CvDatayad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvDatayad],
    }).compileComponents();

    fixture = TestBed.createComponent(CvDatayad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
