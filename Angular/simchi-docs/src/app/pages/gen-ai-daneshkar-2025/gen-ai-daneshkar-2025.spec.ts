import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenAiDaneshkar2025 } from './gen-ai-daneshkar-2025';

describe('GenAiDaneshkar2025', () => {
  let component: GenAiDaneshkar2025;
  let fixture: ComponentFixture<GenAiDaneshkar2025>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenAiDaneshkar2025],
    }).compileComponents();

    fixture = TestBed.createComponent(GenAiDaneshkar2025);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
