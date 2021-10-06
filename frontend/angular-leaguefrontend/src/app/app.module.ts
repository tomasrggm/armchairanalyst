import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestareaComponent } from './testarea/testarea.component';
import { RedirecterComponent } from './redirecter/redirecter.component';
import { Testarea2Component } from './testarea2/testarea2.component';


@NgModule({
  declarations: [
    AppComponent,
    TestareaComponent,
    RedirecterComponent,
    Testarea2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
