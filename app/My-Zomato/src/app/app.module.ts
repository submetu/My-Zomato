import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app.routing';


import {HtppService} from './services/http-service.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCsIx5Oc8G06rGfXvB0samfMC0tlxZLcaM'
    })
  ],
  providers: [
    HtppService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
