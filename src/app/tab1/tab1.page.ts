import { Component } from '@angular/core';
import { Forecast } from '../models/forecast';
import { WeatherServiceService } from '../services/weather-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public isLoading = true;
  public slideOptions = {
    initialSlide: 3, 
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 5,
  };
  


  data:any;
  dateWiseWeahter:Forecast[]=[];
  constructor(private weatherSer:WeatherServiceService) {}

  ngOnInit()
  {
     this.weatherSer.getWeather('Rio de Janeiro').subscribe(
       (res)=>{
        this.data = res['list'];

        for (let i = 0; i < res['list'].length; i+=8)
        {
            const weatherWiseData = new Forecast(
            res['list'][i].dt_txt,
            res['list'][i].weather[0].icon,
            res['list'][i].main.temp_max,
            res['list'][i].main.temp_min,
            res['list'][i].weather[0].description,
            );
            this.dateWiseWeahter.push(weatherWiseData);
        }
        this.isLoading = false;
       },
       (err)=>
       {
          console.log(err);
       }
     );

     
  }




  doRefresh(event) {
     
    this.dateWiseWeahter=[];
    this.data=[];
    this.isLoading=true;
    this.weatherSer.getWeather('Rio de Janeiro').subscribe(
      (res)=>{
       this.data = res['list'];

       for (let i = 0; i < res['list'].length; i+=8)
       {
           const weatherWiseData = new Forecast(
           res['list'][i].dt_txt,
           res['list'][i].weather[0].icon,
           res['list'][i].main.temp_max,
           res['list'][i].main.temp_min,
           res['list'][i].weather[0].description,
           );
           this.dateWiseWeahter.push(weatherWiseData);
       }
       this.isLoading = false;
       event.target.complete();
      },
      (err)=>
      {
         console.log(err);
      }
    );

  }





}
