import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleUiLibraryModule } from 'sample-ui-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SampleUiLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
