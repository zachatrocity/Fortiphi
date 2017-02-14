import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { ChartsModule } from 'ng2-charts';

//services
import {WeatherService} from './weather-service.service';
import {GeolocationService} from './geolocation.service';

//components
import { AppComponent, DialogContent } from './app.component';
import { CameraFeedComponentComponent } from './camera-feed-component/camera-feed-component.component';
import { WeatherIconComponentComponent } from './weather-icon-component/weather-icon-component.component';
import { WeatherWidgetComponentComponent } from './weather-widget-component/weather-widget-component.component';

@NgModule({
  declarations: [
    AppComponent, DialogContent, CameraFeedComponentComponent, WeatherIconComponentComponent, WeatherWidgetComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    ChartsModule
  ],
  entryComponents: [DialogContent],
  providers: [WeatherService, GeolocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
