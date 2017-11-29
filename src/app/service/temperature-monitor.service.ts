import { Injectable } from '@angular/core';
import {Temperature} from "./temperature.model";
import {Subject} from "rxjs/Subject";

@Injectable()
export class TemperatureMonitorService {

  private temperatureList: Temperature[] = [];
  public temperatureListChanged = new Subject<any>();
  public sortedTemperatureListChanged = new Subject<any>();
  private median: number;

  constructor() { }

  recordTemperature(item: number){
    this.temperatureList.push(item);
    this.temperatureListChanged.next(this.temperatureList);
  }

  getTemperatureRecords(){
    return this.temperatureList;
  }

  getCurrentMedian(){
    const sortedArray: Temperature[] = this.temperatureList.sort((a, b) => {
      if(a < b) return -1;
      if(a > b) return 1;
      return 0;
    });
    if (sortedArray.length % 2 === 0){
      this.median = ((+sortedArray[sortedArray.length/2]) + (+sortedArray[sortedArray.length/2 - 1]))/2;
    } else {
      this.median = +sortedArray[Math.floor(sortedArray.length/2)];
    }
    this.sortedTemperatureListChanged.next(sortedArray);
    return this.median;
  }

}
