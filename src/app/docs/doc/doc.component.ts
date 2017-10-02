import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { StaffComponent } from '../staff/staff.component';
import { DocListService } from '../service/doc-list.service'

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit {

  // @ViewChild(StaffComponent)
  // userlist: StaffComponent;
  
  sub: Object;
  userlist: object;

  constructor(private appRoutes: ActivatedRoute, public service:DocListService) { 
    console.log("this.service.getData()",this.service.getData());
    // this.service.getData();
    this.userlist = this.service.getData();
  }

  ngOnInit() {
    this.sub = this.appRoutes.data.subscribe(v => console.log("vvv",v));
  }

}
