import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './screen/login/login.component';
import { HomeComponent } from './screen/home/home.component';

const routes: Routes = [ { path: '', component: LoginComponent },{ path: 'search', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
