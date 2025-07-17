import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { tokenguardGuard } from './tokenguard.guard';

describe('tokenguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => tokenguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
