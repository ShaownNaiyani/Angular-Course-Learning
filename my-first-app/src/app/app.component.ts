import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddIntervals= [];
  evenIntervals = [];
  
  onIntervalFired(firedNumber:number){

    if(firedNumber%2==0)
    {
      this.evenIntervals.push(firedNumber);
    }
    else
    {
      this.oddIntervals.push(firedNumber);
    }
    
  }


}
