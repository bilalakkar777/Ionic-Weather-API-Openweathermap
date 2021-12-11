import { Component } from '@angular/core';
import { WeatherServiceService } from './services/weather-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private weatherSer:WeatherServiceService) {}

  ngOnInit()
  {
     
  }

}
