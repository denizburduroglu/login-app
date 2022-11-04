import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CONSTANTS } from 'src/app/global/constant-variables';
import { AuthenticatedResponse } from 'src/app/models/authenticated-response.interface';
import { Login } from 'src/app/models/login.interface';
import { LoginRestAPIService } from 'src/app/services/LoginRestAPI/login-rest-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  constructor(
    private loginRestAPIService: LoginRestAPIService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitLoginForm(username: string, password: string) {
    let loginUser: Login = {
      username: username,
      password: password
    }

    this.loginRestAPIService.loginUser(loginUser).subscribe({
      next: (authResponse: AuthenticatedResponse) => {
        // Store token into localStorage (for auth header interceptor)
        localStorage.setItem(CONSTANTS.LOGIN_REST_API_TOKEN_LOCAL_STORAGE, authResponse.token);
      },
      complete: () => {
        // Completed login and got token
        this.router.navigate(["/home"]);
      },
      error: () => {

      }
    })
  }

}
