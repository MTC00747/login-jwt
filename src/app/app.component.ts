import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { Route, Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';
import { BehaviorSubject, Subject, observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  }

