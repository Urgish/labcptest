import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { TemperatureMonitorService } from "./service/temperature-monitor.service";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TemperatureMonitorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
