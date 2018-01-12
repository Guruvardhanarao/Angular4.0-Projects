import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cr-select',
  templateUrl: './cr-select.component.html',
  styleUrls: ['./cr-select.component.css']
})
export class CrSelectComponent implements OnInit {

  @Input() ArrayUsers: any[];
  @Input() LocalUsers: any;
  @Input() AjaxUsers: any;

  constructor() { }

  ngOnInit() {
  }

}
