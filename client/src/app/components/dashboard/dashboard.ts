import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankData, BankUser } from '../../services/bank-data';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  private bankService = inject(BankData);

  users = signal<BankUser[]>([]);
  loading = signal(true);
  error = signal<string | null>(null);

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.loading.set(true);
    this.bankService.getExternalData().subscribe({
      next: (data) => {
        this.users.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Error cargando los datos bancarios.');
        this.loading.set(false);
        console.error(err);
      }
    });
  }
}
