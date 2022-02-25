import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from 'src/app/services/api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ContentComponent } from './content.component';

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
  it('should Hava child component.', () => {
    expect(component).toBeTruthy();
  });
});
