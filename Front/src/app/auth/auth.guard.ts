import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
  Router,
  
} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService,
    private router:Router) {
  }
   canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
     if(!this.auth.loggedIn){
        this.router.navigate(['/login']);
     }
    return this.auth.loggedIn;
  }
}