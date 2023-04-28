import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email :string = ''
  senha : string = ''

  constructor(private authService: AuthServiceService, private router: Router) {}

  login() {
    this.authService.login(this.email,this.senha).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}