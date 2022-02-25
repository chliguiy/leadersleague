import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { LoginComponent } from './screen/login/login.component';
import { ThemeButtonComponent } from './component/theme-button/theme-button.component';
import { HomeComponent } from './screen/home/home.component';
import { ContentComponent } from './component/content/content.component';
import { SearchComponent } from './component/search/search.component';
import { ResultInfoComponent } from './component/result-info/result-info.component';
import { ResultContentComponent } from './component/result-content/result-content.component';
import { InfoComponent } from './component/info/info.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from './component/pagination/pagination.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    NavComponent,
    ThemeButtonComponent,
    HomeComponent,
    ContentComponent,
    InfoComponent,
    ResultInfoComponent,
    ResultContentComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
