import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeadDisplayListComponent } from './lead-display-list/lead-display-list.component';
import { PageBackgroundComponent } from './page-background/page-background.component';
import { CreateLeadFormComponent } from './create-lead-form/create-lead-form.component';
import { LeadService } from './services/lead.service';

@NgModule({
  declarations: [
    AppComponent,
    LeadDisplayListComponent,
    PageBackgroundComponent,
    CreateLeadFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LeadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
