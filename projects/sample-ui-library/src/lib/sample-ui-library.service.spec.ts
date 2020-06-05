import { TestBed } from '@angular/core/testing';

import { SampleUiLibraryService } from './sample-ui-library.service';

describe('SampleUiLibraryService', () => {
  let service: SampleUiLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleUiLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
