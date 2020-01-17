import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AttributeRoutingModule } from './attributes-routing.module';
import { ListComponent } from './list/list.component';
import { UpsertComponent } from './upsert/upsert.component';
import { DetailComponent } from './detail/detail.component';
import { RelsComponent } from './rels/rels.component';
@NgModule({
  declarations: [ListComponent, DetailComponent, RelsComponent, UpsertComponent],
  imports: [
    CommonModule,
    FormsModule,
    AttributeRoutingModule
  ]
})
export class AttributeModule {
}
