import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

export const authGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    const auth = inject(AuthService)
    const router = inject(Router)

    if (auth.isAuthenticated()) {
            return true
    } else {
        auth.logout()
        router.navigate(['/admin', 'login'], {
            queryParams: {
                loginAgain: true
            }
        })
    }
    return false
}
