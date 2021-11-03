import { Component, OnInit, ViewChild, Input } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke
} from "ng-apexcharts";
import { Chartmodel, Series } from 'src/app/models/chartmodel';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};


@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.sass']
})
export class AreaChartComponent implements OnInit { 
  
  constructor() {
  }

  @Input() chartmodels : Chartmodel[] = [];
  @Input() title : string; 

  categories : Chartmodel;
  
  public chartOptions: Partial<ChartOptions>

  ngOnInit() {
    
    this.categories = this.chartmodels.shift();    
    console.log(this.chartmodels.map(e=> console.log(e)))
    this.chartOptions = {
      series: this.chartmodels.map(e=> <Series>{name:e.ColumnName,data:e.ColumnData}),
      chart: {
        height: 350,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      
      xaxis: {
        categories: this.categories.ColumnData
      },
      
    };
    
  }

}
