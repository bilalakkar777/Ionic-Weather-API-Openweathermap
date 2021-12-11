import { Component } from '@angular/core';
import { Forecast } from '../models/forecast';
import { WeatherServiceService } from '../services/weather-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public slideOptions = {
    initialSlide: 3, 
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 5,
  };
  

  public isLoading = true;
  data:any;
  dateWiseWeahter:Forecast[]=[];
  constructor(private weatherSer:WeatherServiceService) {}

  ngOnInit()
  {
     this.weatherSer.getWeather('Los Angeles').subscribe(
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
            
            console.log(this.dateWiseWeahter);
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
    this.weatherSer.getWeather('beijing').subscribe(
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
