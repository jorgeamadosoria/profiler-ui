import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  colorScheme = {
    domain: ['#1abc9c', '#7f8c8d', '#f1c40f', '#2c3e50',  '#2ecc71', '#bdc3c7','#e67e22','#8e44ad',
    '#3498db','#c0392b','#e74c3c','#2980b9','#9b59b6','#d35400','#8e44ad','#ecf0f1','#34495e','#f39c12','#2c3e50','#95a5a6']
  };

  // bus number
  viewBusNumber: any[] = [700, 500];
  showYAxis = true;
  gradientBusNumber = false;
  showLegend = true;
  yAxisLabel = 'Attributes';
  showYAxisLabel = true;
  busNumber = 'controllers/talentscape/busnumber';
  busNumberGraph: any;

  // skill coverage
  showLabels = true;
  viewSkillCoverage: any[] = [600, 500];
  skillCoverage = 'controllers/talentscape/skillcoverage';
  skillCoverageGraph: any;
  gradientSkillCoverage = false;
  animations: boolean = true;

  // top most searched
  topMostSearched = 'controllers/talentscape/topsearched';
  topMostSearchedTable: any;


  // top most endorsed
  topMostEndorsed = 'controllers/talentscape/mostendorsed';
  topMostEndorsedTable: any;


  // top most learnable
  topMostLearnable = 'controllers/talentscape/mostlearnable';
  topMostLearnableTable: any;

  constructor(private service: Service) { }

  ngOnInit() {
    this.service.stat(this.busNumber).subscribe(data => this.busNumberGraph = data);
    this.service.stat(this.skillCoverage).subscribe(data => this.skillCoverageGraph = data);
    this.service.stat(this.topMostSearched).subscribe(data => this.topMostSearchedTable = data);
    this.service.stat(this.topMostEndorsed).subscribe(data => this.topMostEndorsedTable = data);
    this.service.stat(this.topMostLearnable).subscribe(data => this.topMostLearnableTable = data);
  }

}
