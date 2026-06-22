import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactTutorial } from './react-tutorial';

describe('ReactTutorial', () => {
  let component: ReactTutorial;
  let fixture: ComponentFixture<ReactTutorial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactTutorial],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactTutorial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
