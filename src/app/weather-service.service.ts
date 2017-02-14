import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

export class Weather {
  type: string;
  temp: number;
  loc: string;
  sunrise: string;
  sunset: string;
}

@Injectable()
export class WeatherService {

  private weatherURL(lat:number, lng:number){
    return "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(SELECT%20woeid%20FROM%20geo.places%20WHERE%20text%3D%22(" + lat + "%2C" + lng + ")%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
  }

  constructor(private http: Http) { }

  getWeather(lat, lng): Promise<Weather> {
    return this.http.get(this.weatherURL(lat,lng))
               .toPromise()
               .then(response => {
                 let condition = response.json().query.results.channel.item.condition;
                 let astro = response.json().query.results.channel.astronomy;
                 let location = response.json().query.results.channel.location.city + ' ' + response.json().query.results.channel.location.region;
                 let weatherResponse: Weather = {
                    type: condition.text,
                    temp: condition.temp,
                    loc: location,
                    sunrise: astro.sunrise,
                    sunset: astro.sunset
                 }
                 console.log(response.json())
                 return weatherResponse;
               })
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
