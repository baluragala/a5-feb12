import { TestBed, async, inject } from '@angular/core/testing';

import { CheckWorkGuard } from './check-work.guard';

describe('CheckWorkGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckWorkGuard]
    });
  });

  it('should ...', inject([CheckWorkGuard], (guard: CheckWorkGuard) => {
    expect(guard).toBeTruthy();
  }));
});
