import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { ChartsModule } from 'ng2-charts';

//services


//components
import { AppComponent, DialogContent } from './app.component';
import { CameraFeedComponent } from './camera-feed-component/camera-feed-component.component';
import { WeatherIconComponent } from './weather-icon-component/weather-icon-component.component';
import { WeatherWidgetComponent } from './weather-widget-component/weather-widget-component.component';

@NgModule({
  declarations: [
    AppComponent, DialogContent, CameraFeedComponent, WeatherIconComponent, WeatherWidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    ChartsModule
  ],
  entryComponents: [DialogContent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
