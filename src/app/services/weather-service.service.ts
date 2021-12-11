import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Geolocation } from '@capacitor/geolocation';
//import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http:HttpClient) { }

  public getWeather(name)
  {
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${name}&appid=78a07164952e030a671b9350f648cd70`);
  }



}
