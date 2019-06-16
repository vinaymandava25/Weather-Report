import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './modules/weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { TemperatureConverterPipe } from './modules/temparature-converter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TemperatureConverterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
