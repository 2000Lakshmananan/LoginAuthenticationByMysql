import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyPageComponent } from './empty-page/empty-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InvalidUrlPageComponent } from './invalid-url-page/invalid-url-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

const routes: Routes = [
  {path:'home/:username',component:HomePageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'signup',component:SignupPageComponent},
  {path:'',component:EmptyPageComponent},
  {path:'**',component:InvalidUrlPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
