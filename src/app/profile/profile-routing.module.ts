import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { UpsertComponent } from './upsert/upsert.component';
import { DetailComponent } from './detail/detail.component';
import { LoginGuard } from '../guard/login.guard';


const routes: Routes = [
  { path: '', redirectTo: 'list',
  canActivate: [LoginGuard] },
  { path: 'list', component: ListComponent,
  canActivate: [LoginGuard] },
  { path: 'upsert/:id', component: UpsertComponent,
  canActivate: [LoginGuard] },
  { path: 'upsert', component: UpsertComponent,
  canActivate: [LoginGuard] },
  { path: 'detail/:id', component: DetailComponent,
  canActivate: [LoginGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
