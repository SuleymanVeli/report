import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';
import { ReportService } from 'src/app/services/report.service';
import { HomeReport } from 'src/app/models/report';
import { Database, DatabaseReport } from 'src/app/models/database';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.sass'],
  providers: [ReportService, DatabaseService]
})
export class AdminHomeComponent implements OnInit {

  constructor(
    private reportService: ReportService,
    private databaseService: DatabaseService) { }

    
    reports: HomeReport[] = [];
    databases: Database[]=[];
    types: string[] = ['area','donut','table']
  
    reportmodel: HomeReport = new HomeReport()
  
    reportError: string
    databaseError: string
  
    onReportModal(report: HomeReport) {
      if (report) {        
        this.reportmodel = { ...report, Database : this.databases.filter(e => e.Id = report.Database.Id)[0]}
        console.log(this.reportmodel)
      }
      else{
        this.reportmodel = new HomeReport()
      }
    }
  
  
    reportSubmit(form: NgForm) {
      if(this.reportmodel.Id)
      {
        this.reportService.updateHomeReport(this.reportmodel).subscribe(
        data => { if (data) this.getReports() },
        err => this.reportError = err
      )
      }
      else{
        console.log(this.reportmodel)

        this.reportService.insertHomeReport(this.reportmodel).subscribe(
          data => { if (data) this.getReports() },
          err => this.databaseError = err
        )

      }
      
    }

    deleteReport(Id: number){
      this.reportService.deleteHomeReport(Id).subscribe(  
        data=>{ if (data) this.getReports() },
        err => {console.log('HTTP Error', err)}
      )
    }
  
    getReports() {
      this.reportService.getHomeReports().subscribe(
        data => this.reports = data,
        err => console.log('HTTP Error', err)
      )
    }
    
    getDatabases() {
      this.databaseService.getDatabases().subscribe(
        data => this.databases = data,
        err => console.log('HTTP Error', err)
      )
    }
  
    ngOnInit() {
      this.getReports()
      this.getDatabases()
    }
}
