import { Component, OnInit, Input } from '@angular/core';
import { TableModel } from 'src/app/models/TableModel';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {

  constructor() { }

  @Input() data : TableModel

  ngOnInit() {
  }

}
