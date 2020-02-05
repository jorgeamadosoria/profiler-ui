import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  colorScheme = {
    domain: ['#7aa3e5', '#5AA454', '#E44D25', '#CFC0BB',  '#a8385d', '#aae3f5']
  };

  // bus number
  viewBusNumber: any[] = [700, 400];
  showYAxis = true;
  gradient = false;
  showLegend = true;
  yAxisLabel = 'Attributes';
  showYAxisLabel = true;
  busNumber = 'controllers/talentscape/busnumber';
  busNumberGraph: any;

  // skill coverage
  showLabels = true;
  viewSkillCoverage: any[] = [500, 400];
  skillCoverage = 'controllers/talentscape/skillcoverage';
  skillCoverageGraph: any;

  constructor(private service: Service) { }

  ngOnInit() {
    this.service.stat(this.busNumber).subscribe(data => this.busNumberGraph = data);
    this.service.stat(this.skillCoverage).subscribe(data => this.skillCoverageGraph = data);
  }

}
