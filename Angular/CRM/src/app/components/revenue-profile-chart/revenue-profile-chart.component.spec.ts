import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueProfileChartComponent } from './revenue-profile-chart.component';

describe('RevenueProfileChartComponent', () => {
  let component: RevenueProfileChartComponent;
  let fixture: ComponentFixture<RevenueProfileChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevenueProfileChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenueProfileChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
