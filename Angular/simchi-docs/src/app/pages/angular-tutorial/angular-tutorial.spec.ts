import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTutorial } from './angular-tutorial';

describe('AngularTutorial', () => {
  let component: AngularTutorial;
  let fixture: ComponentFixture<AngularTutorial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularTutorial],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularTutorial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
