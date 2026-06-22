import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeployServer } from './deploy-server';

describe('DeployServer', () => {
  let component: DeployServer;
  let fixture: ComponentFixture<DeployServer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeployServer],
    }).compileComponents();

    fixture = TestBed.createComponent(DeployServer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
