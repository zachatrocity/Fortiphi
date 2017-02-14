import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'weather-icon',
  templateUrl: './weather-icon-component.component.html',
  styleUrls: ['./weather-icon-component.component.css']
})
export class WeatherIconComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() weathertype: string;

}
