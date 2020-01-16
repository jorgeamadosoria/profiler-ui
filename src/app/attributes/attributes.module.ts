import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AttributeRoutingModule } from './attributes-routing.module';
import { ListComponent } from './list/list.component';
import { UpsertComponent } from './upsert/upsert.component';
import { DetailComponent } from './detail/detail.component';
@NgModule({
  declarations: [ListComponent, DetailComponent, UpsertComponent],
  imports: [
    CommonModule,
    FormsModule,
    AttributeRoutingModule
  ]
})
export class AttributeModule { }