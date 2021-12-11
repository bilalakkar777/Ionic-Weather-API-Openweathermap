import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CityWeatherPageRoutingModule } from './city-weather-routing.module';

import { CityWeatherPage } from './city-weather.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CityWeatherPageRoutingModule
  ],
  declarations: [CityWeatherPage]
})
export class CityWeatherPageModule {}
