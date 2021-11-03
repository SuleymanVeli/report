import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultQueryService } from 'src/app/services/result-query.service';

@Component({
  selector: 'app-result-query',
  templateUrl: './result-query.component.html',
  styleUrls: ['./result-query.component.sass'],
  providers:[ResultQueryService]
})
export class ResultQueryComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private result:ResultQueryService) { }

  public keepOriginalOrder = (a, b) => a.key

  data : any;

  column: Column[] = [];  

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{    
      this.result.getResultByReportId(params['reportId']).subscribe(
        data=>{
        this.data = data;
        console.log(data),
        this.setColumn(data[0])
      },
      error=> console.log(error))
    })
  }

  setColumn(col :object){
    let names = Object.keys(col)
    names.forEach(name =>{ this.column.push({ key: name , type : typeof(col[name])})})
    console.log(this.column)
  }

}

export class Column{
  key : string
  type : string
}


