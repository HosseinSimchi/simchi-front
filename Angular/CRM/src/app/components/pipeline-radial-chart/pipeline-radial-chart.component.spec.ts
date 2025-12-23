import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineRadialChartComponent } from './pipeline-radial-chart.component';

describe('PipelineRadialChartComponent', () => {
  let component: PipelineRadialChartComponent;
  let fixture: ComponentFixture<PipelineRadialChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipelineRadialChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipelineRadialChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
