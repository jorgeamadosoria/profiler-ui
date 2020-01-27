import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Service } from 'src/app/service/service';
import { Feedback, FeedbackType } from '../entities/Feedback';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-mymodal',
  templateUrl: './kudos.component.html',
  styleUrls: ['./kudos.component.scss']
})
export class KudosComponent implements OnInit {
  private path = 'controllers/feedbacks';

  @Input() model: Feedback;
  types = FeedbackType;

  constructor(
    public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }
}
