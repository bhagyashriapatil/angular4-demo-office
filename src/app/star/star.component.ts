import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  // receive rating number from pparent component
  @Input() rating: number;

  starWidth: number;

  // pass clicked data to parent component from child comp
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  // changes only input properties changes
  ngOnChanges(): void {
    this.starWidth = this.rating * 85/5;
  }

  onClick(){
    // Here I have used literls 
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }

  ngOnInit() {
  }

}
