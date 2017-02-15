import { Component, OnInit } from '@angular/core';

import {WeatherService} from '../weather-service.service';
import {GeolocationService} from '../geolocation.service';

@Component({
  selector: 'weather-widget',
  templateUrl: './weather-widget-component.component.html',
  styleUrls: ['./weather-widget-component.component.css'],
  providers: [WeatherService, GeolocationService]
})
export class WeatherWidgetComponent implements OnInit {

  constructor(private weatherService: WeatherService, private geolocation: GeolocationService) { }
  
  weather: Object = {};
  weatherLoaded: boolean = false;
  location: any = '';

  ngOnInit() {
    this.getLocation();
  }

  getLocation(): void {
    this.geolocation.getLocation({maximumAge: 0}).subscribe(
        (position) => this.getWeather(position.coords.latitude, position.coords.longitude),
        (error) => console.log(error)
    );
  }

  getWeather(lat: Number, lng: Number): void {
    this.weatherService.getWeather(lat, lng).then(weather => { this.weather = weather; this.weatherLoaded = true; });
  }

}
