import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BankAuthService {
    private http = inject(HttpClient);
    private router = inject(Router);
    // Dynamic URL detection: if localhost, use 3000, otherwise relative path
    private apiUrl = window.location.hostname === 'localhost'
        ? 'http://localhost:3000/api/auth/login'
        : '/api/auth/login';
    private tokenKey = 'bank_auth_token';

    isLoggedIn = signal(!!localStorage.getItem(this.tokenKey));

    login(credentials: { username: string; password: string }) {
        return this.http.post<{ message: string; token: string }>(this.apiUrl, credentials)
            .pipe(
                tap(response => {
                    localStorage.setItem(this.tokenKey, response.token);
                    this.isLoggedIn.set(true);
                    this.router.navigate(['/dashboard']);
                })
            );
    }

    logout() {
        localStorage.removeItem(this.tokenKey);
        this.isLoggedIn.set(false);
        this.router.navigate(['/login']);
    }

    getToken() {
        return localStorage.getItem(this.tokenKey);
    }
}
