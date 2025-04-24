import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { UserLogged } from './userLogged';
import { UserpermissionService } from '../services/userpermission.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private service: UserpermissionService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let userLogged: UserLogged = new UserLogged();

    if (userLogged.isLogged()) {
      const currentUser = userLogged.getCurrentUser();

      if (!this.service.hasRole(["admin"])) {
        this.router.navigate(['/dashboard']);
        return false;
      }
      return true;

    } else {
      this.router.navigate(['/dashboard']);
      return false;
    }
  }
}
