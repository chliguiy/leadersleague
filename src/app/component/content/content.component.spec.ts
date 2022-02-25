import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from 'src/app/services/api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ContentComponent } from './content.component';
import { By } from '@angular/platform-browser';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentComponent ]   ,   
      imports: [ HttpClientTestingModule ],
      providers: [ ApiService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('renders an independent pagination', () => {
    const { debugElement } = fixture;
    const pagination = debugElement.query(By.css('app-pagination'));
    expect(pagination).toBeTruthy();
  });
  it('renders an independent search', () => {
    const { debugElement } = fixture;
    const search = debugElement.query(By.css('app-search'));
    expect(search).toBeTruthy();
  });
  it('renders an independent result content', () => {
    const { debugElement } = fixture;
    const result_content = debugElement.query(By.css('app-result-content'));
    expect(result_content).toBeTruthy();
  });
  it('renders an independent result info', () => {
    const { debugElement } = fixture;
    const info = debugElement.query(By.css('app-result-info'));
    expect(info).toBeTruthy();
    
  });

});
