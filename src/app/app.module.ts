import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Image5Component } from './image5/image5.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    Image5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
