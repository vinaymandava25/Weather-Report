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
  weatherReport: any = [];
  tempReport:any=[];
  days: any = [];
  temparatures:any=[];
  maxTemparature:any;
  averageTemparatures:any=[];
  constructor(private weatherReportService: WeatherService) { }

  ngOnInit() {

  }

  onsubmit() {
    
  
      this.weatherReportService.initReport(this.location).subscribe(data => {
        console.log(data)
        this.weatherReport = data['list'];
        console.log("Weather Report"+this.weatherReport)
        if(this.weatherReport!=null){
          for (var i = 0; i < this.weatherReport.length - 1; i++) {
            var splitted1 = this.weatherReport[i]["dt_txt"].split(" ", 1);
            var splitted2 = this.weatherReport[i + 1]["dt_txt"].split(" ", 1);
            this.temparatures[i]=this.weatherReport[i].main.temp;
            //this.maxTemparature[i]=Math.max(this.temparatures[i]);
            //console.log(this.maxTemparature[i]);
            if (splitted1[0] != splitted2[0] ) {
              this.days[i] = splitted1[0];
              console.log(this.days)              
            }
          }
        }else{
          alert("please enter valid Location")
        }
       
      },error => {
        console.log(error)
        if(error.status === 404 ){
          alert("PLease enter valid Location")
        }
      });
    
  }
}
