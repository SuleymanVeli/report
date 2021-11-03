import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {AuthService} from "src/app/services/auth.service"

@Injectable()
export class RoleGuard implements CanActivate{
    constructor(private authService : AuthService,private router : Router){
        
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{

        const expectedRole = route.data.expectedRole

        if(!this.authService.isLoggedIn()){            
            this.router.navigate(["login"])
            return false;
        }        
        if(!this.authService.isRoleIn(expectedRole)){            
            this.router.navigate(["login"])
            return false;
        }        
        return true;
    }

    
        
    
}
