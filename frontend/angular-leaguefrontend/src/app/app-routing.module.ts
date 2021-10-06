import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TestareaComponent } from './testarea/testarea.component';
import { RedirecterComponent } from './redirecter/redirecter.component';
import { Testarea2Component } from './testarea2/testarea2.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'main', component: AppComponent},
  { path: 'dashboard', component: RedirecterComponent},
  { path: 'leaderboard', component: TestareaComponent},
  { path: 'player/:id', component: Testarea2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
