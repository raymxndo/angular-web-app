import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-can',
  templateUrl: './add-edit-can.component.html',
  styleUrls: ['./add-edit-can.component.css']
})
export class AddEditCanComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input()
  can:any;
  candidate_id:string;
  first_name:string;
  last_name:string;
  email:string;
  phone_num:string;
  address_:string;
  country:string;

  ngOnInit(): void {
    this.candidate_id=this.can.candidate_id;
    this.first_name=this.can.first_name;
    this.last_name=this.can.last_name;
    this.email=this.can.email;
    this.phone_num=this.can.phone_num;
    this.address_=this.can.address_;
    this.country=this.can.country;
  }

  addCandidate() {
    var val = {candidate_id:this.candidate_id,
               first_name:this.first_name,
               last_name:this.last_name,
               email:this.email,
               phone_num:this.phone_num,
               address_:this.address_,
               country:this.country};
    this.service.addCandidate(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCandidate() {
    var val = {candidate_id:this.candidate_id,
               first_name:this.first_name,
               last_name:this.last_name,
               email:this.email,
               phone_num:this.phone_num,
               address_:this.address_,
               country:this.country};
    this.service.updateCandidate(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
