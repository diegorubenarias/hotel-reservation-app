import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Checkbox } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule, Checkbox, InputTextModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  private fb = inject(FormBuilder);
  private service = inject(LoginService);
  private router = inject(Router);

  ngOnInit(): void {
   this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.service.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value).subscribe({
        next: (response) => {          
            
            this.router.navigate(['/admin-dashboard']);
        },
        error: (error) => {
          console.error('Login failed', error);
        }
      });
    }
  }
}
