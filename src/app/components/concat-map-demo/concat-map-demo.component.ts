import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs'; 
import { map, delay, mergeMap, concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-concat-map-demo',
  templateUrl: './concat-map-demo.component.html',
  styleUrls: ['./concat-map-demo.component.css']
})
export class ConcatMapDemoComponent implements OnInit {

  constructor() { 
    this.runTest();
  }

  ngOnInit() {
  }

  getData = (param) => {
    const delayTime = Math.floor(Math.random() * 10000) + 1;
    return of(`Retrieving the new data with params: ${param} and delay: ${delayTime}`).pipe(
      delay(delayTime)
    )
  }

  getSameDelayData = (param) => {
    const delayTime =  10000;
    return of(`Retrieving the new data with params: ${param} and delay: ${delayTime}`).pipe(
      delay(delayTime)
    )
  }

  runTest() {
    console.log('testing a different map ...');
    // using a regular map
    from([1,2,3,4]).pipe(
      map(param => this.getSameDelayData(param))
    ).subscribe(val => val.subscribe(data => console.log('map: ', data)));
    
    // using mergeMap
    from([1, 2, 3 ,4]).pipe(
      mergeMap(param => this.getData(param))
    ).subscribe(val => console.log('mergeMap: ', val));
    
    // using concatMap
    from([1, 2, 3 ,4]).pipe(
      concatMap(param => this.getData(param))
    ).subscribe(val => console.log('concatMap: ', val));
  }  
}
