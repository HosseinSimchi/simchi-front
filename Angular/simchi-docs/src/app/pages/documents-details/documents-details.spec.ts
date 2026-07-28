import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsDetails } from './documents-details';

describe('DocumentsDetails', () => {
  let component: DocumentsDetails;
  let fixture: ComponentFixture<DocumentsDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentsDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentsDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
