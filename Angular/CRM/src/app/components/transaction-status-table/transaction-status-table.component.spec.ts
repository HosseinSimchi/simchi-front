import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionStatusTableComponent } from './transaction-status-table.component';

describe('TransactionStatusTableComponent', () => {
  let component: TransactionStatusTableComponent;
  let fixture: ComponentFixture<TransactionStatusTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionStatusTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionStatusTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
