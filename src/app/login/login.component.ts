import { Component, Input } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable, observable , of} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email :string = ''
  senha : string = ''

 
  constructor(private authService: AuthServiceService, private router: Router) {
  }
  ngOnInit (){
  }
  setToken(token: string): void {
    localStorage.setItem('token', token);
    setTimeout(() => {
      localStorage.removeItem('token');
    }, 30 * 60 * 1000); // 30 minutos em milissegundos
  }
  login() {
    console.log(this.email)
    console.log(this.senha)
    this.authService.login(this.email,this.senha).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        this.setToken(response.token);
        this.router.navigate(['/home']);
      },
      
      (error: any) => {
        console.log(error);
      }
    );
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  
}