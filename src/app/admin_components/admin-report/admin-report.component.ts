import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { ReportService } from 'src/app/services/report.service';
import { Report, ReportInsert } from 'src/app/models/report';
import { NgForm } from '@angular/forms';
import { Database } from 'src/app/models/database';

@Component({
  selector: 'app-admin-report',
  templateUrl: './admin-report.component.html',
  styleUrls: ['./admin-report.component.sass'],
  providers: [ReportService, DatabaseService]
})
export class AdminReportComponent implements OnInit {

  constructor(
    private reportService: ReportService,
    private databaseService: DatabaseService) { }

    reports: Report[] = [];
    databases: Database[]=[];
  
    reportmodel: ReportInsert = new ReportInsert()
  
    reportError: string
    databaseError: string
  
    onReportModal(report: Report) {
      if (report) {
        this.reportmodel = { ...report , DatabaseId : report.Database.Id}

      }
      else{
        this.reportmodel = new ReportInsert()
      }
    }
  
    
  
    reportSubmit(form: NgForm) {
      if(this.reportmodel.Id)
      {
        this.reportService.updateReport(this.reportmodel).subscribe(
        data => { if (data) this.getReports() },
        err => {
          this.reportError = err
          console.log(err)
        }
        
      )
      }
      else{
        console.log(this.reportmodel)
        this.reportService.insertReport(this.reportmodel).subscribe(
          data => { if (data) this.getReports() },
          err => this.databaseError = err
        )
      }
      
    }

    deleteReport(Id: number){
      this.reportService.deleteReport(Id).subscribe(  
        data=>{ if (data) this.getReports() },
        err => {console.log('HTTP Error', err)}
      )
    }
  
    getReports() {
      this.reportService.getReports().subscribe(
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
