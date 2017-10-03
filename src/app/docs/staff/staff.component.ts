import { Component, OnInit } from '@angular/core';
import { DocListService } from '../service/doc-list.service'

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  staffData: Array<any>;
  
  constructor(private service:DocListService) { 
    this.staffData = [
      {
        "id":0,
        "name": "Deepak",
        "email": "deepak@zymr.com",
        "project": "10i"
      },
      {
        "id":1,
        "name": "Sneha",
        "email": "sneha@zymr.com",
        "project": "LIS"
      },
      {
        "id":2,
        "name": "Bhagyashri",
        "email": "bhagyashri@zymr.com",
        "project": "NFL"
      },
      {
        "id":3,
        "name": "Shewta",
        "email": "shewta@zymr.com",
        "project": "LIS"
      }
    ];
  }

  showClient(recvdata, index){
    this.service.updateData(recvdata);
    this.service.getData();
  }

  ngOnInit() {
  }

}
