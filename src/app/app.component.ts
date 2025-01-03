import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginService } from './services/login.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  private apiService = inject(LoginService);
  private data: any;
  ngOnInit(): void {
    this.apiService.getExampleData().subscribe(
      (response) => (this.data = response),
      (error) => console.error(error)
    );
  }
  title = 'hotel-reservation-frontend';


}
