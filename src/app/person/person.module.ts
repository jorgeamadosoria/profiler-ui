import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonRoutingModule } from './person-routing.module';
import { ListComponent } from './list/list.component';
import { UpsertComponent } from './upsert/upsert.component';
import { DetailComponent } from './detail/detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [ListComponent, DetailComponent, UpsertComponent],
  imports: [
    CommonModule,
    FormsModule,
    PersonRoutingModule
  ]
})
export class PersonModule { }
