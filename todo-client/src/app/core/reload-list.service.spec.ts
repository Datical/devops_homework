import { TestBed } from '@angular/core/testing';

import { ReloadListService } from './reload-list.service';

describe('ReloadListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReloadListService = TestBed.get(ReloadListService);
    expect(service).toBeTruthy();
  });
});
