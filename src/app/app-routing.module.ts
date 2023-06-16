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
    path: 'grid',
    loadChildren: () => import('./modules/grid/grid.module').then(m => m.GridModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
