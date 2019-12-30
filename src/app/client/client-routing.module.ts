import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { UpsertComponent } from './upsert/upsert.component';


const routes: Routes = [
  { path: '', redirectTo: 'list' },
  { path: 'list', component:ListComponent },
  { path: 'upsert', component:UpsertComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
