import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetKnowUsComponent } from './get-know-us.component';

describe('GetKnowUsComponent', () => {
  let component: GetKnowUsComponent;
  let fixture: ComponentFixture<GetKnowUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetKnowUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetKnowUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
