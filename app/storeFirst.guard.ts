import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot, RouterStateSnapshot, Router
} from "@angular/router";
import { StoreComponent } from "./store/store.component";

@Injectable()
export class StoreFirstGuard {
  private firstNaviation = true;

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
    if (this.firstNaviation) {
      this.firstNaviation = false;
      if (route.component != StoreComponent) {
        this.router.navigateByUrl("/");
        return false;
      }
    }
    return true;
  }
}
