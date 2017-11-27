import { Component, OnInit, Input} from '@angular/core';
import {MenuItem} from '../shared/menu_item';

@Component({
  selector: 'app-dishdetails',
  templateUrl: './dishdetails.component.html',
  styleUrls: ['./dishdetails.component.scss']
})
export class DishdetailsComponent implements OnInit {
  @Input()
  dishItem: MenuItem;
  constructor() {
    
   }

  ngOnInit() {
  }

 
  
}
