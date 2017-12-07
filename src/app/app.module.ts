import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PlaceholderModule} from './placeholder/placeholder.module'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PlaceholderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
