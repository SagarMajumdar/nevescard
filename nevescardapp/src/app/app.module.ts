import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NevesCardComponent } from './neves-card/neves-card.component';
import { SectionHiderDirective } from './section-hider.directive';

@NgModule({
  declarations: [
    AppComponent,
    NevesCardComponent,
    SectionHiderDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
