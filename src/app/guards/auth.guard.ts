import { UserService } from 'src/app/services/user.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable, of as observableOf } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private UserService: UserService, private router: Router) {}
  canActivate(): Observable<boolean> {
    return this.UserService.user$.pipe(
      map((user) => {
        if (!user) {
          this.router.navigate(['/signup']);
          return false;
        }
        if (user) {
          return true;
        } else {
          this.router.navigate(['/signup']);
        }
        return false;
      })
    );
  }
}
