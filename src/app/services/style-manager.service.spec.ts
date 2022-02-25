import { TestBed } from '@angular/core/testing';

import { StyleManagerService } from './style-manager.service';

describe('StyleManagerService', () => {
  let service: StyleManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StyleManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should isDark been false for default',()=>{
    expect(service.isDark).toEqual(false);
  })
  
  it('should toggleDarkTheme to be defined',()=>{
    expect(service.toggleDarkTheme).toBeDefined();
  })
});
