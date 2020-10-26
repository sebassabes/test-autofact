import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class LoginguardGuard implements CanActivate {
  
  constructor(private login:LoginService,private route:Router) {
    
  }
  canActivate() {
    if (this.login.getCurrentUser()) {
      
      return true;
    } else {
      this.route.navigate(['/login']);
      return false;
    }
  }
  
}
