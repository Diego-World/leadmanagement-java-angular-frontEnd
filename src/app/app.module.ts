import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeadDisplayListComponent } from './lead-display-list/lead-display-list.component';
import { PageBackgroundComponent } from './page-background/page-background.component';

@NgModule({
  declarations: [
    AppComponent,
    LeadDisplayListComponent,
    PageBackgroundComponent
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
