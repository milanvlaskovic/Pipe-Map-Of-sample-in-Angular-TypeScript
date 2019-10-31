import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs'; 
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-off-demo',
  templateUrl: './off-demo.component.html',
  styleUrls: ['./off-demo.component.css']
})
export class OffDemoComponent implements OnInit {

  vehilces: any = [];
  constructor() { 
    this.runTest();
  }

  ngOnInit() {
  }

  runTest () {

    // lets create our data first
    const data = of([
      {
        brand: 'Nisan',
        model: 'Quashqai'
      },
      {
        brand: 'Nisan',
        model: 'Juke'
      },
      {
        brand: 'Nisan',
        model: 'Navara'
      },
      {
        brand: 'Nisan',
        model: 'X-Trail'
      },
      {
        brand: 'Mazda',
        model: 'CX-3'
      },
      {
        brand: 'Mazda',
        model: 'CX-5'
      }            
    ]);
    
    // get data as brand+model string. Result: 
    // ["Nisan Quashqai", "Nisan Juke", "Nisan Navara", "Nisan X-Trail", "Mazda CX-3", "Mazda CX-5"]
    data
      .pipe(
        map(cars => cars.map(car => `${car.brand} ${car.model}`))
      ).subscribe(
        cars => {
          console.log(cars);
          this.vehilces.push(cars);
          console.error('The vehicles are: ', this.vehilces);
        })
    
     
    data
      .pipe(
        map(cars => cars.filter(car => car.brand === 'Nisan'))
      ).subscribe(cars => console.log(cars))        
  }

}