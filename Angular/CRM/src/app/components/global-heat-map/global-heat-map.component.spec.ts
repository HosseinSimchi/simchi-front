import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalHeatMapComponent } from './global-heat-map.component';

describe('GlobalHeatMapComponent', () => {
  let component: GlobalHeatMapComponent;
  let fixture: ComponentFixture<GlobalHeatMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalHeatMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalHeatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
