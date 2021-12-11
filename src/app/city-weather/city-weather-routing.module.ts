import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CityWeatherPage } from './city-weather.page';

const routes: Routes = [
  {
    path: '',
    component: CityWeatherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CityWeatherPageRoutingModule {}
