import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/service/service';
import { Person } from 'src/app/entities/Person';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { KudosComponent } from 'src/app/kudos/kudos.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  private path = 'controllers/persons';
  model: Person;
  constructor(
    private service: Service,
    private modalService: NgbModal,
    private actRoute: ActivatedRoute) { }

  detailCallback(data: any) {
      console.log(data);
      this.model = new Person(data);
  }

  ngOnInit() {
    this.actRoute.params.subscribe((routeParams: { id: number; }) => {
          this.service.get(this.path, routeParams.id)
          .subscribe((data) => this.detailCallback(data));
      });
  }

  open(item) {
    const modalRef = this.modalService.open(KudosComponent);
    modalRef.componentInstance.my_modal_content = item;
  }
}
