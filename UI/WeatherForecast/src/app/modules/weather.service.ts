import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  
  api_key='1cae433a8e0f48d4b18a5220d60bff6e';
  constructor(private http:HttpClient) { }

  initReport(location) {
    return this.http.get( 'http://api.openweathermap.org/data/2.5/forecast?q='+location+ '&apiKey=' + this.api_key);
  }
}
