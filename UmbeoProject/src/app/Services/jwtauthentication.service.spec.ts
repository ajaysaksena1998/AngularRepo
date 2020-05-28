import { TestBed } from '@angular/core/testing';

import { JWTAuthenticationService } from './jwtauthentication.service';

describe('JWTAuthenticationService', () => {
  let service: JWTAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JWTAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
