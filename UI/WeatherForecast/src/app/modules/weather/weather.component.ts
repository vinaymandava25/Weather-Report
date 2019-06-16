import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { TemperatureConverterPipe } from '../temparature-converter.pipe';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {

  location: any;
  weatherReport:any=[];
  constructor(private weatherReportService: WeatherService) { }

  ngOnInit() {

  }

  onsubmit() {
    console.log(this.location)
    console.log('Onsubmit is working')
    this.weatherReportService.initReport(this.location).subscribe(data => {
      console.log(data)
      this.weatherReport = data['list'];
      console.log(this.weatherReport)
    });
  }

}
