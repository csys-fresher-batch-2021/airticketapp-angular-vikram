import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardServiceService } from 'src/app/auth-guard-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private Authguardservice: AuthGuardServiceService, private router:Router){}

  canActivate(): boolean {
    if(!this.Authguardservice.getToken()){
      this.router.navigateByUrl("/admin/login");
    }
    return true;
  }
  
}
