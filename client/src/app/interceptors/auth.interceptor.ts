import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { BankAuthService } from '../services/bank-auth';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const authService = inject(BankAuthService);
    const token = authService.getToken();

    if (token) {
        const cloned = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
        return next(cloned);
    }

    return next(req);
};
