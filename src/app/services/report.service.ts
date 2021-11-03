import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Report, ReportInsert, HomeReport } from '../models/report';
import { catchError } from 'rxjs/operators'
@Injectable()
export class ReportService {

  constructor(private http:HttpClient) { }

  getReports(): Observable<Report[]>{
    return this.http.get<Report[]>("http://localhost:51691/api/report")
    .pipe(
      catchError(this.handleError)
    )
  }

  updateReport(report: ReportInsert): Observable<Report>{
    return this.http.put<Report>("http://localhost:51691/api/report",report)
    .pipe(
      catchError(this.handleError)
    )
  }

  insertReport(report: ReportInsert): Observable<Report>{
    return this.http.post<Report>("http://localhost:51691/api/report",report)
    .pipe(
      catchError(this.handleError)
    )
  }

  deleteReport(Id : number): Observable<string>{
    return this.http.delete<string>(`http://localhost:51691/api/report/${Id}`)
    .pipe(
      catchError(this.handleError)
    )
  }


  deleteHomeReport(Id : number): Observable<string>{
    return this.http.delete<string>(`http://localhost:51691/api/homereport/${Id}`)
    .pipe(
      catchError(this.handleError)
    )
  }

  

  getHomeReports(): Observable<HomeReport[]>{
    return this.http.get<HomeReport[]>("http://localhost:51691/api/homereport")
    .pipe(
      catchError(this.handleError)
    )
  }

  updateHomeReport(report: HomeReport): Observable<HomeReport>{
    return this.http.put<HomeReport>("http://localhost:51691/api/homereport",report)
    .pipe(
      catchError(this.handleError)
    )
  }

  insertHomeReport(report: HomeReport): Observable<HomeReport>{
    return this.http.post<HomeReport>("http://localhost:51691/api/homereport",report)
    .pipe(
      catchError(this.handleError)
    )
  }

 

  handleError(err: HttpErrorResponse) {
    
    console.log(err)
    return throwError(err.error.ExceptionMessage || err.error ||"sistem error");

  }
}
