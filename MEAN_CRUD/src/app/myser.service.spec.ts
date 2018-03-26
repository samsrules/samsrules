import { TestBed, inject } from '@angular/core/testing';

import { MyserService } from './myser.service';

describe('MyserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyserService]
    });
  });

  it('should be created', inject([MyserService], (service: MyserService) => {
    expect(service).toBeTruthy();
  }));
});
