import { Component, OnInit } from '@angular/core';
import { ResultQueryService } from 'src/app/services/result-query.service';
import { homeResult } from 'src/app/models/HomeResult';
import { Chartmodel, Series } from 'src/app/models/chartmodel';
import { element } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers:[ResultQueryService]
})
export class HomeComponent implements OnInit {

  constructor(private result:ResultQueryService) { }

  homeResult: homeResult[]=[];

  ngOnInit() {
    this.result.getHomeResult().subscribe(data=>{
      this.homeResult = data;
    })
  }

  sizeClass(type:string):string{
    if(type === "area") return "col-md-6"
    if(type === "donut") return "col-md-6"
    if(type === "table") return "col-md-12"
    return ""
  }



}
