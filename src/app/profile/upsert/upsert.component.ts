import { Component, OnInit } from '@angular/core';
import { ProfileAttributes } from 'src/app/entities/ProfileAttributes';
import { Service } from 'src/app/service/service';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile, ProfileModel } from 'src/app/entities/Profile';
import { Attribute } from 'src/app/entities/Attribute';

@Component({
  selector: 'app-upsert',
  templateUrl: './upsert.component.html',
  styleUrls: ['./upsert.component.scss']
})
export class UpsertComponent implements OnInit {
  private path = 'controllers/profiles';
  private pathAttr = 'controllers/profiles/attr';
  model: ProfileModel;

  constructor(
    private service: Service,
    private route: Router,
    private actRoute: ActivatedRoute) {
    }

  ngOnInit() {
    console.log(this.route);
    this.model = new ProfileModel();
    this.model.profile = new Profile({});
    this.service.list(this.pathAttr).subscribe((data:Array<Attribute>) => {
      this.model.attributes = data;
      this.model.selectedAttribute = this.model.attributes[0];
      this.model.selectedLevel=1;
    });
    this.actRoute.params.subscribe((routeParams: { id: number; }) => {
    
      if (routeParams.id) {
          this.service.get(this.path, routeParams.id)
          .subscribe((data) => this.model.profile = new Profile(data));
        }
      });
  }

  onSubmit() {
    console.log("on submit");
    console.log(this.model.profile);
    this.service.upsert(this.path, this.model.profile).subscribe(data => this.route.navigate(['profile/list']));
    //  console.log('submitted');
  }

  onDeleteAttr(data:ProfileAttributes){
    //remove attribute from profileAttribute list
    console.log("before delete attr")
    console.log(JSON.stringify(this.model.profile.attributes));
    this.model.profile.attributes.splice(this.model.profile.attributes.indexOf(data),1);
    console.log("after delete attr")
    console.log(JSON.stringify(this.model.profile.attributes));
    //put attribute back in list
    this.model.attributes.push(data.attribute);
  }

  addAttribute(){
    console.log("Add Attribute");
    console.log(JSON.stringify(this.model.selectedAttribute));
    this.model.profile.attributes.push(new ProfileAttributes({
      attribute:new Attribute(this.model.selectedAttribute), 
      level:this.model.selectedLevel
    }));
    this.model.profile.attributes.forEach(e => console.log(e));
    this.model.selectedLevel = 1;
    this.model.attributes.splice(this.model.attributes.indexOf(this.model.selectedAttribute),1);
    this.model.selectedAttribute = this.model.attributes[0];
  }


}

