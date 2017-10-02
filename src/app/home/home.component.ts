import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { StarComponent } from '../star/star.component';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { UpdatemodalComponent } from '../home/modals/updatemodal/updatemodal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[UserService]
})

export class HomeComponent implements OnInit {

  pageTitle: string = "User List";

  userList:Array<any>;  //when we use subscribe to bind array to html directly without async
  // userList: Observable<any>;
  bsModalRef: BsModalRef;
 
  constructor(private loginService: LoginService, private userService: UserService, private router: Router, private modalService: BsModalService) {

    this.modalService.onHide.subscribe((result)=>{
      if(result){
        this.userService.updateList(result.data).subscribe(res =>{
          this.userList = res.message;          
        });
      }
    })

    // here we use subscribe and then use of response
    this.loginService.getUsers()
    .subscribe(res=>{
     this.userList=res;
    })

    // this.bsModalRef.content.onClose = (myData) => {
    //   // Do something with myData and then hide
    //   console.log("Hey i  receive the data from modal");
    //   this.bsModalRef.hide();
    // };

  }

  onRatingClicked(event): void {
    this.pageTitle = 'Productive List: ' + event;
  }

  update(recvdata,index){
    if(!Object.is({},recvdata)){
      let config = {
        animated: true,
        keyboard: true,
        backdrop: false,
        ignoreBackdropClick: true,
        class: 'modal-md',
        user: {data:recvdata,
               index:index }
      };
      
      this.bsModalRef = this.modalService.show(UpdatemodalComponent, config);
      // or
      // this.bsModalRef = this.modalService.show(UpdatemodalComponent, Object.assign({}, config, {user: recvdata}));
    }
  }

  delete(index) {
    this.userService.deleteUser(index)
    .subscribe(res=>{
      this.userList = res
    })
  }

  showRejectionModal(){
    // this.modalData = this.bsModalRef.content;
    console.log("gsseygtgtgrteryie",this.modalService);
  }

  ngOnInit() {
  }

}
