import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/service/service';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Attributes';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Levels';

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };
  busNumber = 'controllers/talentscape/busnumber';
  busNumberGraph: any;
  constructor(private service: Service) { }

  ngOnInit() {
    this.service.stat(this.busNumber).subscribe(data => this.busNumberGraph = data);
  }

}
