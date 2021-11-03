import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Database } from '../models/database';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class DatabaseService {

  constructor(private http:HttpClient) { }

  getDatabases(): Observable<Database[]>{
    return this.http.get<Database[]>("http://localhost:51691/api/database")
    .pipe(
      catchError(this.handleError)
    );
  }

  updateDatabase(database :Database): Observable<Database>{
    return this.http.put<Database>("http://localhost:51691/api/database",database)
    .pipe(
      catchError(this.handleError)
    );
  }

  insertDatabase(database :Database): Observable<Database>{
    return this.http.post<Database>("http://localhost:51691/api/database",database)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteDatabase(Id :number): Observable<string>{
    return this.http.delete<string>(`http://localhost:51691/api/database/${Id}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    console.log(err)
    if(err.error instanceof ErrorEvent ){
      return throwError("xeta "+ err.error.message)
    }

    return throwError("Sistem xetasi bas verdi"+ err.error.message )

  }
}
