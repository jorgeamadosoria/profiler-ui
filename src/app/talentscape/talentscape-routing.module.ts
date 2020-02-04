import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from '../guard/login.guard';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', redirectTo: 'view',
  canActivate: [LoginGuard] },
  { path: 'view', component: ViewComponent,
  canActivate: [LoginGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalentscapeRoutingModule { }
