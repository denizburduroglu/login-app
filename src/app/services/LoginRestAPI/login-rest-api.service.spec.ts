import { TestBed } from '@angular/core/testing';
import { LoginRestAPIService } from './login-rest-api.service';

describe('LoginRestAPIService', () => {
  let service: LoginRestAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginRestAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
