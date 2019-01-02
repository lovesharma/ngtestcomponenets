import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { FirstdayComponent } from './firstday/firstday.component';
import { PagesComponent } from './pages/pages.component';
import { TeamComponent } from './team/team.component';
import { TemplateDrivenFormComponent } from './pages/template-driven-form/template-driven-form.component';

const childRoutes: Routes = [
  // { path: '', redirectTo: 'child1', pathMatch: 'full' },
  { path: 'child1', component: FirstdayComponent },
  { path: 'child1', component: FirstdayComponent },
  { path: 'child2', component: SecondComponent },
  { path: 'template-driven-form', component: TemplateDrivenFormComponent }
];

const routes: Routes = [
  { path: '', redirectTo: 'pages' ,pathMatch: 'full' },
  { path: 'firstday', component: FirstdayComponent },
  { path: 'pages', component: PagesComponent, children: childRoutes },
  { path: 'second', component: SecondComponent },
  { path: 'team', component: TeamComponent },
  { path: '**', redirectTo: 'pages' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
