import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
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

  resolveData: any;

  userList:Array<any>;  //when we use subscribe to bind array to html directly without async
  // userList: Observable<any>;
  
  bsModalRef: BsModalRef;
 
  constructor(private loginService: LoginService, private activeRoute:ActivatedRoute, private userService: UserService, private router: Router, private modalService: BsModalService) {

    // here we use subscribe mtd and use response
    // get existed users
    this.loginService.getUsers()
    .subscribe(res=>{
     this.userList=res;
    });

    // direct assignment to array when use async
    // this.userList=this.loginService.getUsers();

    //receive updated user on modal close
    this.modalService.onHide.subscribe((result)=>{
      if(result){
        this.userService.updateList(result).subscribe(res =>{
          this.userList = res.message;    
        });
      }
    });

    // this.bsModalRef.content.onClose = (myData) => {
    //   // Do something with myData and then hide
    //   console.log("Hey i  receive the data from modal");
    //   this.bsModalRef.hide();
    // };

  }
  
  update(recvdata,index){
    if(!Object.is({},recvdata)){
      let config = {
        animated: true,
        keyboard: true,
        backdrop: false,
        ignoreBackdropClick: true,
        class: 'modal-md',
        user: {
          data:recvdata,
          index:index
        }
      };
      
      // Pass a TemplateRef or a component as a first argument and config as a second (optionally).
      this.bsModalRef = this.modalService.show(UpdatemodalComponent, config); 
      // or
      // this.bsModalRef = this.modalService.show(
      //    UpdatemodalComponent, Object.assign({}, config, {user: recvdata})
      // );
    }
  };

  onRatingClicked(event): void {
    this.pageTitle = 'Productive List: ' + event;
  };

  delete(index) {
    this.userService.deleteUser(index)
    .subscribe(res=>{
      this.userList = res.message;
    })
  };

  ngOnInit() {
    this.resolveData = this.activeRoute.snapshot.data['user'];
    // console.log("this.resolveData",this.resolveData);
    
    // console.log("this.activeRoute.snapshot.params['id']",this.activeRoute.snapshot.params['id']);
    // console.log(this.activeRoute.params.subscribe(params=>console.log(params)));
  }

}
