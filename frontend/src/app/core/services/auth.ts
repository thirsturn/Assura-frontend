import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiUrl = 'http://localhost:5171/api/auth';

  constructor(private http: HttpClient) {}

  // register
  register(userData: any) {
    return this.http.post(`${this.apiUrl}/setup`, userData);
  }

  // login
  login(credentials: any) {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }
}
