import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BankAuthService } from '../../services/bank-auth';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './login.html',
    styleUrl: './login.css'
})
export class Login {
    private authService = inject(BankAuthService);

    username = signal('');
    password = signal('');
    errorMessage = signal('');
    isLoading = signal(false);

    onSubmit() {
        this.isLoading.set(true);
        this.errorMessage.set('');

        this.authService.login({
            username: this.username(),
            password: this.password()
        }).subscribe({
            next: () => {
                this.isLoading.set(false);
            },
            error: () => {
                this.errorMessage.set('Usuario o contraseña incorrectos');
                this.isLoading.set(false);
            }
        });
    }
}
