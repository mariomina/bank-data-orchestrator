import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { BankAuthService } from '../services/bank-auth';

export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(BankAuthService);
    const router = inject(Router);

    if (authService.isLoggedIn()) {
        return true;
    }

    return router.parseUrl('/login');
};
