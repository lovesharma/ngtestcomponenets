import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { FirstdayComponent } from './firstday/firstday.component';
import { PagesComponent } from './pages/pages.component';
import { TeamComponent } from './team/team.component';
import { TemplateDrivenFormComponent } from './pages/template-driven-form/template-driven-form.component';


const MaterialModules = [MatTabsModule];

@NgModule({
  declarations: [
    AppComponent,
    FirstdayComponent,
    SecondComponent,
    PagesComponent,
    TeamComponent,
    TemplateDrivenFormComponent
  ],
  entryComponents: [SecondComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModules,
      ],
  exports :[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
