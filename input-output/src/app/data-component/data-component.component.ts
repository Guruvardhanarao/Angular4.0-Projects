import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-component',
  templateUrl: './data-component.component.html',
  styleUrls: ['./data-component.component.css']
})
export class DataComponentComponent implements OnInit {

  @Input() empList: any;
  @Output() fullDetails: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getEmpFullDetails(empData) {
    this.fullDetails.emit(empData);
  }

}
