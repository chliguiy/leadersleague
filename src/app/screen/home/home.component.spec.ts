import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders an independent info', () => {
    const { debugElement } = fixture;
    const info = debugElement.query(By.css('app-info'));
    expect(info).toBeTruthy();
  });

  it('renders an independent content', () => {
    const { debugElement } = fixture;
    const content = debugElement.query(By.css('app-content'));
    expect(content).toBeTruthy();
  });
  it('renders an independent nav', () => {
    const { debugElement } = fixture;
    const nav = debugElement.query(By.css('app-nav'));
    expect(nav).toBeTruthy();
  });
});
