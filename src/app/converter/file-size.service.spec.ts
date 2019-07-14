import { TestBed } from '@angular/core/testing';

import { FileSizeService } from './file-size.service';

describe('FileSizeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileSizeService = TestBed.get(FileSizeService);
    expect(service).toBeTruthy();
  });
});
