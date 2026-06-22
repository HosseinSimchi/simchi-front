import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEngineeringDaneshkar2025 } from './data-engineering-daneshkar-2025';

describe('DataEngineeringDaneshkar2025', () => {
  let component: DataEngineeringDaneshkar2025;
  let fixture: ComponentFixture<DataEngineeringDaneshkar2025>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataEngineeringDaneshkar2025],
    }).compileComponents();

    fixture = TestBed.createComponent(DataEngineeringDaneshkar2025);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
