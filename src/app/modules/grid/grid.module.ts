import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from 'src/app/grid/grid.component';
import { SectionsComponent } from 'src/app/nestedViws/sections/sections.component';
import { ChaptyersComponent } from 'src/app/nestedViws/chaptyers/chaptyers.component';
import { SubjectsComponent } from 'src/app/nestedViws/subjects/subjects.component';

const _routes: Routes = [
  {
    path: '', component: GridComponent,
    children: [
      { path: '', pathMatch: 'full', component: SectionsComponent, outlet: 'secondaryoutlet' },
      { path: 'chapters', pathMatch: 'full', component: ChaptyersComponent, outlet: 'secondaryoutlet' },
      { path: 'subjects', pathMatch: 'full', component: SubjectsComponent, outlet: 'secondaryoutlet' },
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(_routes),
  ]
})
export class GridModule { }
