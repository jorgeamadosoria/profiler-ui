import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { TalentscapeRoutingModule } from './talentscape-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [ViewComponent],
  imports: [
    TalentscapeRoutingModule,
    CommonModule, NgxChartsModule
  ]
})
export class TalentscapeModule { }
