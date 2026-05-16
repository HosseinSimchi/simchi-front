import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPrivilages } from './my-privilages';

describe('MyPrivilages', () => {
  let component: MyPrivilages;
  let fixture: ComponentFixture<MyPrivilages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPrivilages],
    }).compileComponents();

    fixture = TestBed.createComponent(MyPrivilages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
