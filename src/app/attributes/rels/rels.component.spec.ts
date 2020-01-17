import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelsComponent } from './rels.component';

describe('RelsComponent', () => {
  let component: RelsComponent;
  let fixture: ComponentFixture<RelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
