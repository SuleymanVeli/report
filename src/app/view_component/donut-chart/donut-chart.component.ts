import { Component, OnInit, Input } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import { Chartmodel } from 'src/app/models/chartmodel';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.sass']
})
export class DonutChartComponent implements OnInit {

  constructor() { }

  @Input() chartmodels : Chartmodel[] = [];  
  @Input() title : string;  

  public chartOptions: Partial<ChartOptions>;

  ngOnInit() {
    this.chartOptions = {
      series: this.chartmodels[1].ColumnData,
      chart: {
        type: "donut"
      },
      labels: this.chartmodels[0].ColumnData,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

}
