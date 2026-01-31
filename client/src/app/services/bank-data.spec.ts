import { TestBed } from '@angular/core/testing';

import { BankData } from './bank-data';

describe('BankData', () => {
  let service: BankData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
