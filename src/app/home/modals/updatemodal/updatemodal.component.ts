import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FormsModule }  from '@angular/forms';

@Component({
  selector: 'app-updatemodal',
  templateUrl: './updatemodal.component.html',
  styleUrls: ['./updatemodal.component.css']
})
export class UpdatemodalComponent implements OnInit {

  public title: string="Update Modal";
  public list: any[] = [];
  userData: any;
  updateData: object;
  index: number;
  newObj: any;

  constructor(public bsModalRef: BsModalRef, private modalService: BsModalService) { 
    
    this.userData = this.modalService.config;

    // this.updateData = this.userData.user.data;
    this.updateData = Object.assign({},this.userData.user.data);  //same as angular.copy()
    
    this.index = this.userData.user.index;

  }

  update(recvdata){
    // pass updated object on modal dismissed, same as $dismiss in angularjs
    this.modalService.setDismissReason(recvdata);
    this.bsModalRef.hide();   
  }

  ngOnInit() {
    // this.data = this.bsModalRef.content;
    // console.log("data",this.modalService.config);
 }

}
