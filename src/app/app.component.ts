import {Component, ViewChild, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import {TemperatureMonitorService} from "./service/temperature-monitor.service";
import { Temperature } from "./service/temperature.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private temperatureRecords: Temperature[] = [];
  private sortedTemperatureRecords: Temperature[] = [];
  private currentMedian: number;
  @ViewChild('f') temperatureForm: NgForm;

  constructor(private temperatureMonitorService: TemperatureMonitorService){}

  ngOnInit(){
    this.temperatureRecords = this.temperatureMonitorService.getTemperatureRecords();
    this.temperatureMonitorService.temperatureListChanged
      .subscribe((temperatureList: Temperature[])=>{
        this.temperatureRecords = temperatureList;
      });
    this.temperatureMonitorService.sortedTemperatureListChanged
      .subscribe((temperatureList: Temperature[])=>{
        this.sortedTemperatureRecords = temperatureList;
      });
  }

  onSubmit(){
    this.temperatureMonitorService.recordTemperature(this.temperatureForm.value.temperature);
    this.temperatureForm.reset();
  }

  getCurrentMedian(){
    this.currentMedian = this.temperatureMonitorService.getCurrentMedian();
  }

}
