import { Component } from '@angular/core';
import { Navigation, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  isSeachClick = false;
  constructor(private router:Router) {}

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

  public search(val)
  {
      this.router.navigateByUrl('/city-weather/'+val);
      console.log(val);
  }

}
