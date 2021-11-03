import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginUser, RegisterUser } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private authService: AuthService,private router :Router) { }

  path : string 

  loginmodel:LoginUser = new LoginUser()
  
  registermodel:RegisterUser = new RegisterUser()

  loginError: any;

  registerError: any;

  registerSuccess: string;

  cleanLoginError(){
    console.log("clearn")
    this.loginError = null
  }

  loginSubmit(form : NgForm){
    console.log(this.loginmodel)
    this.authService.login(this.loginmodel).subscribe(data=>{
      this.authService.saveToken(data)
      this.router.navigate([""])
    },
    err =>{
      this.loginError = err;
    }
    );    
  }

  registerSubmit(form : NgForm){    
    this.authService.register({...this.registermodel}).subscribe(
      data =>{
        this.registerSuccess = data
        setTimeout(() => {this.router.navigate(["login"])},2000)        
      },
      err =>{
        this.registerError = err;        
      }

    )
  }


  ngOnInit() {
    this.activatedRoute.url.subscribe(url=>{    
      this.path = url[0].path 
    })
  }

}
