import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-can',
  templateUrl: './show-can.component.html',
  styleUrls: ['./show-can.component.css']
})
export class ShowCanComponent implements OnInit {

  constructor(private service:SharedService) {}

  CandidateList:any=[];

  ModalTitle:string;
  ActivateAddEditCanComp:boolean=false;
  can:any;

  ngOnInit(): void{
    this.refreshCanList();
  }

  addClick() {
    this.can={
      candidate_id:0,
      first_name:"",
      last_name:"",
      email:"",
      phone_num:"",
      address_:"",
      country:""
    }

    this.ModalTitle="Add Candidate";
    this.ActivateAddEditCanComp=true;
  }

  editClick(item) {
    this.can=item;
    this.ModalTitle="Edit Candidate";
    this.ActivateAddEditCanComp=true;
  }

  deleteClick(item) {
    if(confirm('Delete Candidate?')){
      this.service.deleteCandidate(item.candidate_id).subscribe(data=>{
        alert(data.toString());
        this.refreshCanList();
      })
    }
  }

  closeClick() {
    this.ActivateAddEditCanComp=false;
    this.refreshCanList();
  }


  
  refreshCanList(){
    this.service.getCanList().subscribe(data=>{
      this.CandidateList=data;
      console.warn("data");
    });
  }
}
