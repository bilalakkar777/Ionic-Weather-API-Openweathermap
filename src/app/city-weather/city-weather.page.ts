import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Forecast } from '../models/forecast';
import { WeatherServiceService } from '../services/weather-service.service';
declare var $: any;
@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.page.html',
  styleUrls: ['./city-weather.page.scss'],
})
export class CityWeatherPage implements OnInit {

  isSeachClick = false;

  constructor(private weatherSer:WeatherServiceService,private activeRoute:ActivatedRoute) {}



  public isLoading = true;
  public slideOptions = {
    initialSlide: 3, 
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 5,
  };
  
  place:string;
  data:any;
  dateWiseWeahter:Forecast[]=[];

  ngOnInit()
  {

    this.activeRoute.params.subscribe(param => {
        this.place = param['city'];
        this.getData( param['city'] );
     });
     
  }


  public search(val)
  {
    this.place=val;
     this.getData(val);    
  }

  
 public getData(city)
 {

  this.data=[];
  this.dateWiseWeahter=[];
  this.isSeachClick=false;

  this.weatherSer.getWeather(city).subscribe(
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



  

 public searchClicked()
 {
   if(this.isSeachClick==false)
   {
     this.isSeachClick=true;
   }
   else
   {
     this.isSeachClick=false;
   }
 }




 doRefresh(event) {
     
  this.dateWiseWeahter=[];
  this.data=[];
  this.isLoading=true;
  this.weatherSer.getWeather(this.place).subscribe(
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
