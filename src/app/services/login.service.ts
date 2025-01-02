import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://hotel-reservation-bck-production.up.railway.app'; // Cambia por tu URL del backend
  private http = inject(HttpClient);
 
  getExampleData(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}
