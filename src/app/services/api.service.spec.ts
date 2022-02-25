import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    service = TestBed.get(ApiService);
    
    spyOn(service, 'getMusic').and.returnValue(of());
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
  it('should have getMusic function', () => {
    expect(service.getMusic).toBeTruthy();
  });

  
});
