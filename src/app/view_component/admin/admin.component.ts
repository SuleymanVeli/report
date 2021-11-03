import { Component, OnInit } from '@angular/core';
import { Report, ReportInsert } from 'src/app/models/report';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from 'src/app/services/report.service';
import { UserService } from 'src/app/services/user.service';
import { DatabaseService } from 'src/app/services/database.service';
import { Database } from 'src/app/models/database';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass'],
  providers: [ReportService, UserService, DatabaseService]
})
export class AdminComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private reportService: ReportService,
    private userService: UserService,
    private databaseService: DatabaseService
  ) { }
  reports: Report[] = [];
  databases: Database[];

  reportmodel: ReportInsert = new ReportInsert()
  databasemodel: Database = new Database()

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

  onDatabaseModal(database: Database) {
    if(database)  this.databasemodel = Object.assign({}, database);
    else this.databasemodel = new Database()
  }

  reportSubmit(form: NgForm) {
    if(this.reportmodel.Id)
    {
      this.reportService.updateReport(this.reportmodel).subscribe(
      data => { if (data) this.getReports() },
      err => this.reportError = err
    )
    }
    else{
      this.reportService.insertReport(this.reportmodel).subscribe(
        data => { if (data) this.getReports() },
        err => this.databaseError = err
      )
    }
    
  }

  databaseSubmit(form: NgForm) {
    if(this.databasemodel.Id)
    {
      this.databaseService.updateDatabase(this.databasemodel).subscribe(
      data => { if (data) this.getDatabases() },
      err => console.log(err)
    )
    }
    else{
      this.databaseService.insertDatabase(this.databasemodel).subscribe(
        data => { if (data) this.getDatabases() },
        err => console.log(err)
      )
    }
    
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
