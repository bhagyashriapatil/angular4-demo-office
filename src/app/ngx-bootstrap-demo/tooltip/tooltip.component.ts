import { Component, OnInit } from '@angular/core';
import { TooltipConfig } from 'ngx-bootstrap/tooltip';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {

   // dynamic content
   content: string = 'tooltip content can contain any html template';
   
  // dynamic html
  html:string = `<div class="btn btn-danger">Never trust not sanitized HTML!!!</div>`;

  constructor() { }

  ngOnInit() {
  }

}
