import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs'; 
import { map, mergeMap, delay, mergeAll, switchAll, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-demo-pipe',
  templateUrl: './demo-pipe.component.html',
  styleUrls: ['./demo-pipe.component.css']
})
export class DemoPipeComponent  {

  constructor() {
    this.runTest();
  }
  
  getData = (param) => {
    return of(`Retrieving the new data with param ${param}`).pipe(
      delay(1000)
    )
  }
  
  runTest() {
    console.log('Running test data');
    
    of(1, 2, 3).pipe(map(x => this.getData(x))).subscribe(data => console.error(data.source));

    // using a regular map
    from([1, 2, 3, 4]).pipe(
      map(param => this.getData(param))
    ).subscribe(val => val.subscribe(data => console.log(data)));
 
    // using map and switchAll
    from([1, 2, 3, 4, 5, 6]).pipe(
      map(param => this.getData(param)),
      switchAll()
    ).subscribe(val => console.log(val));

    // using switchMap
    from([1, 2, 3, 4, 5, 6, 7]).pipe(
      switchMap(param => this.getData(param))
    ).subscribe(val => console.log(val));   
     
  }
}