import { Component, OnInit } from '@angular/core';
import { LoginRestAPIService } from 'src/app/services/LoginRestAPI/login-rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private loginRestAPIService: LoginRestAPIService
  ) { }

  ngOnInit(): void {
  }

  getTheWeather() {
    this.loginRestAPIService.getTheWeather().subscribe({
      next: (value) => {
        console.log(value);
      }
    })
  }
}
