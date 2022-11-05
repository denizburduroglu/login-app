import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather.model';
import { LoginRestAPIService } from 'src/app/services/LoginRestAPI/login-rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  weeklyWeather: Weather[] = [];
  displayedWeeklyWeatherColumns: string[] = ['date', 'summary', 'temperatureC', 'temperatureF'];

  constructor(
    private loginRestAPIService: LoginRestAPIService
  ) { }

  ngOnInit(): void {
  }

  getTheWeather() {
    this.loginRestAPIService.getTheWeather().subscribe({
      next: (value) => {
        this.weeklyWeather = value;
      }
    })
  }
}
