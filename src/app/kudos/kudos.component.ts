import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-mymodal',
  templateUrl: './kudos.component.html',
  styleUrls: ['./kudos.component.scss']
})
export class KudosComponent implements OnInit {
 
  @Input() my_modal_content;
 
  constructor(public activeModal: NgbActiveModal) {}
 
  ngOnInit() {
  }
 
}
 