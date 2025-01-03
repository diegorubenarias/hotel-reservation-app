import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl =  environment.apiUrl;
  private http = inject(HttpClient);
 
  getExampleData(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post(`${this.apiUrl}/user/login`, loginData);
  }
}
