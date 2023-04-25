import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { YouTubePlayerModule } from "@angular/youtube-player";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VocabComponent } from './vocab/vocab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    VocabComponent,
    TopBarComponent,
    BottomBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    YouTubePlayerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
