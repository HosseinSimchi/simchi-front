import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlDs } from './ml-ds';

describe('MlDs', () => {
  let component: MlDs;
  let fixture: ComponentFixture<MlDs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlDs],
    }).compileComponents();

    fixture = TestBed.createComponent(MlDs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
