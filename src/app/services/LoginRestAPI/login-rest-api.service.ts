import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/login.interface';
import { environment } from 'src/environments/environment';
import { AuthenticatedResponse } from 'src/app/models/authenticated-response.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginRestAPIService {

  constructor(
    private http: HttpClient
  ) { }

  loginUser(login: Login): Observable<AuthenticatedResponse> {
    return this.http.post<AuthenticatedResponse>(`${environment.loginRestApiUrl}/api/Auth/login`, login);
  }

  getTheWeather(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.loginRestApiUrl}/WeatherForecast`);
  }
}
