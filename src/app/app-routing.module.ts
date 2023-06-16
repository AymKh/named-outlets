import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { AboutComponent } from './about/about.component';
import { SectionsComponent } from './nestedViws/sections/sections.component';
import { ChaptyersComponent } from './nestedViws/chaptyers/chaptyers.component';
import { SubjectsComponent } from './nestedViws/subjects/subjects.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  {
    path: 'grid', component: GridComponent,
    children: [
      { path: '', pathMatch: 'full', component: SectionsComponent, outlet: 'secondaryoutlet' },
      { path: 'chapters', pathMatch: 'full', component: ChaptyersComponent, outlet: 'secondaryoutlet' },
      { path: 'subjects', pathMatch: 'full', component: SubjectsComponent, outlet: 'secondaryoutlet' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
