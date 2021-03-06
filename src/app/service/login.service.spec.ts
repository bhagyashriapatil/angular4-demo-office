import { TestBed, inject } from '@angular/core/testing';
import { Http, Response, HttpModule, JsonpModule, Headers, RequestOptions } from '@angular/http';
import { LoginService } from './login.service';

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ LoginService ],
      imports: [ HttpModule ]
    });
  });

  it('should be created', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));
});
