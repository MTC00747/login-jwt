import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:5128/api/login ';

  login(email : string, senha :string) {
    const body = {
      email: email,
      senha: senha
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.baseUrl, body,httpOptions);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}


