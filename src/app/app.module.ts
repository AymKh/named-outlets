import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { AboutComponent } from './about/about.component';
import { SectionsComponent } from './nestedViws/sections/sections.component';
import { ChaptyersComponent } from './nestedViws/chaptyers/chaptyers.component';
import { SubjectsComponent } from './nestedViws/subjects/subjects.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    AboutComponent,
    SectionsComponent,
    ChaptyersComponent,
    SubjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
