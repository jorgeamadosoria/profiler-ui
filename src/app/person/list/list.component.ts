import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/service/service';
import { NgbModalOptions, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { KudosComponent } from 'src/app/kudos/kudos.component';
import { Person } from 'src/app/entities/Person';
import { Feedback } from 'src/app/entities/Feedback';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  private path = 'controllers/persons';
  private pathFeedback = 'controllers/feedbacks';
  items: any;

  closeResult: string;
  modalOptions: NgbModalOptions;
  constructor(
    public service: Service,
    private modalService: NgbModal
  ) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    };
  }

  listCallback(data: any) {
      this.items = data;
      console.log(this.items);
  }

  ngOnInit() {
    console.log(this.path);
    this.service.list(this.path).subscribe( data => this.listCallback(data));
  }

  onDelete(id: number) {
    this.service.delete(this.path, id).subscribe(data => this.items = this.items.filter((value) => value.id !== id));
  }

  open(item: Person) {
    const modalRef = this.modalService.open(KudosComponent);
    modalRef.componentInstance.model = new Feedback(
      {
        personFrom : this.service.loggedUser,
        personTo : item
      }
    );

    modalRef.result.then((data) => {
      console.log('send feedback');
      console.log(data);
      this.service.upsert(this.pathFeedback, data)
      .subscribe(res => console.log(res));
    }, (reason) => {
        // on dismiss
    });
  }

}
