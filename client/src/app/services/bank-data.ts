import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface BankUser {
  id: number;
  name: string;
  email: string;
  company: string;
  city: string;
}

@Injectable({
  providedIn: 'root',
})
export class BankData {
  private http = inject(HttpClient);
  private apiUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3000/api/external-data'
    : '/api/external-data';

  getExternalData(): Observable<BankUser[]> {
    const token = localStorage.getItem('bank_auth_token');
    return this.http.get<BankUser[]>(this.apiUrl, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
}
