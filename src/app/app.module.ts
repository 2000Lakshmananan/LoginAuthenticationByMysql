import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AuthentyService } from './authenty.service';
import { HttpclientService } from './httpclient.service';
import { InvalidUrlPageComponent } from './invalid-url-page/invalid-url-page.component';
import { EmptyPageComponent } from './empty-page/empty-page.component';
import { SomethingComponent } from './something/something.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    SignupPageComponent,
    InvalidUrlPageComponent,
    EmptyPageComponent,
    SomethingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthentyService,HttpclientService],
  bootstrap: [SomethingComponent]
})
export class AppModule { }
