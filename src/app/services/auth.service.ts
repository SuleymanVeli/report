import { Injectable } from '@angular/core';
import { LoginUser } from '../models/user';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient :HttpClient,private router :Router) { }
  
  jwtHelper = new JwtHelperService();
  userToken:any;  
 
  login(user:LoginUser):Observable<string>{
    let headers = new HttpHeaders().append("Content-Type","application/json");
    return this.httpClient
    .post<string>("http://localhost:51691/api/login",user,{ headers: headers})
    .pipe(
      catchError(this.handleError)
    )
  }

  register(user:LoginUser):Observable<string>{    
    let headers = new HttpHeaders().append("Content-Type","application/json");
    return this.httpClient
    .post<string>("http://localhost:51691/api/register",user,{ headers: headers})
    .pipe(
      catchError(this.handleError)
    )
  }

  saveToken(token){
    localStorage.setItem('token',token);
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(["login"])
  }

  isLoggedIn():boolean{
    let token: string = localStorage.getItem('token') ;

    return token != null && !this.jwtHelper.isTokenExpired(token);    
  }
  isRoleIn(role : string):boolean{
    let token: string = localStorage.getItem('token') ;

    return this.jwtHelper.decodeToken(token).role === role;    
  }

  handleError(err: HttpErrorResponse){
    console.log(err)
    return throwError(err.error.ExceptionMessage || err.error ||"sistem error");

  }

}
