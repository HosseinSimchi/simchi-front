import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTests } from './angular-tests';

describe('AngularTests', () => {
  let component: AngularTests;
  let fixture: ComponentFixture<AngularTests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularTests],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularTests);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
