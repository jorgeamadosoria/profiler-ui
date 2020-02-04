import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { TalentscapeRoutingModule } from './talentscape-routing.module';



@NgModule({
  declarations: [ViewComponent],
  imports: [
    TalentscapeRoutingModule,
    CommonModule
  ]
})
export class TalentscapeModule { }
