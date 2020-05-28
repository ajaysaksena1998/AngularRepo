import { TestBed } from '@angular/core/testing';

import { HttpInterceptorJwtService } from './http-interceptor-jwt.service';

describe('HttpInterceptorJwtService', () => {
  let service: HttpInterceptorJwtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpInterceptorJwtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
