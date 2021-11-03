import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { homeResult } from '../models/HomeResult';

@Injectable()
export class ResultQueryService {

  constructor(private http:HttpClient) { }

  getResultByReportId(reportId): Observable<any>{
    return this.http.get<any>(`http://localhost:51691/api/resultquery/${reportId}`);
  }

  getHomeResult(): Observable<homeResult[]>{
    return this.http.get<homeResult[]>("http://localhost:51691/api/homeresult");
  }


}
