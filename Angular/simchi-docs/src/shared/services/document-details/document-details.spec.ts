import { TestBed } from '@angular/core/testing';

import { DocumentDetails } from './document-details';

describe('DocumentDetails', () => {
  let service: DocumentDetails;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentDetails);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
