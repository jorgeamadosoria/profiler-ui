import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { UpsertComponent } from './upsert/upsert.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  { path: '', redirectTo: 'list' },
  { path: 'list', component: ListComponent },
  { path: 'upsert/:id', component: UpsertComponent },
  { path: 'upsert', component: UpsertComponent },
  { path: 'detail/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
