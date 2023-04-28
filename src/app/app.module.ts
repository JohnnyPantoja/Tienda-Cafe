import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CafesModule } from './cafes/cafes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CafesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
