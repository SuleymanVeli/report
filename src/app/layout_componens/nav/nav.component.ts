import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from 'src/app/services/report.service';
import { Report } from 'src/app/models/report';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass'],
  providers: [ReportService]
})
export class NavComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private reportService:ReportService ,private authService: AuthService) { }

  reports : Report[] = [];
  isAdmin: boolean = false;


  ngOnInit() {
      this.reportService.getReports().subscribe(
        data=>{  this.reports = data;})

      this.isAdmin = this.authService.isRoleIn("admin");
  }
}
