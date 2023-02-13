import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card-component',
  templateUrl: './property-card-component.component.html',
  styleUrls: ['./property-card-component.component.css']
})
export class PropertyCardComponentComponent implements OnInit {

  Property:any={
    "Id":1,
    "Name":"House 1",
     "Price":"400$"
  }
  constructor() { }

  ngOnInit() {
  }

}
