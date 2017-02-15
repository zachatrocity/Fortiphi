import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'camera-feed-component',
  templateUrl: './camera-feed-component.component.html',
  styleUrls: ['./camera-feed-component.component.css']
})
export class CameraFeedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  moveLeft(gridindex: number){
    if (gridindex == 1)
      return

    let indexFrom: number;
    let indexTo: number;

    indexFrom = (this.cameras.findIndex(element => element.gridpos == gridindex));
    indexTo = (this.cameras.findIndex(element => element.gridpos == gridindex - 1));
    this.cameras[indexFrom].gridpos = gridindex - 1;
    this.cameras[indexTo].gridpos = gridindex;
  }

  moveRight(gridindex: number){
    if (gridindex == this.cameras.length)
      return

    let indexFrom: number;
    let indexTo: number;

    indexFrom = (this.cameras.findIndex(element => element.gridpos == gridindex));
    indexTo = (this.cameras.findIndex(element => element.gridpos == gridindex + 1));
    this.cameras[indexFrom].gridpos = gridindex + 1;
    this.cameras[indexTo].gridpos = gridindex;
  }

  cameras = [
    {text: 'Front Yard', status: true, feed: 'assets/frontyard.jpg', gridpos: 1},
    {text: 'Back Yard', status: true, feed: 'assets/backyard.jpg', gridpos: 2},
    {text: "Ben's Room", status: false, feed: 'assets/bensroom.jpg', gridpos: 3},
    {text: "Garage", status: false, feed: 'assets/bensroom.jpg', gridpos: 4},
    {text: "Master Bath", status: false, feed: 'assets/bensroom.jpg', gridpos: 5},
    {text: 'Kitchen', status:true, feed: 'assets/kitchen.jpg', gridpos: 6},
    {text: '2nd Kitchen', status:true, feed: 'assets/kitchen.jpg', gridpos: 7},
  ];

}
