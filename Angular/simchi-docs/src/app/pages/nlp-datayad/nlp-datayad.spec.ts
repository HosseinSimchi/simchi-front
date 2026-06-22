import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlpDatayad } from './nlp-datayad';

describe('NlpDatayad', () => {
  let component: NlpDatayad;
  let fixture: ComponentFixture<NlpDatayad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NlpDatayad],
    }).compileComponents();

    fixture = TestBed.createComponent(NlpDatayad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
