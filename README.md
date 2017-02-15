# Fortiphi

This is an Angular 2 front end for viewing raspberry pi camera streams. This is WIP


### dashboard

![dashboard](https://raw.githubusercontent.com/zachatrocity/Fortiphi/master/src/fortiphi.png)

### Weather Widget

![weather widget](https://raw.githubusercontent.com/zachatrocity/Fortiphi/master/src/weather-widget.png)

## Todo
* [x] - Add loading... to weather widget
* [ ] - Ensure weather icons work for all types of weather
* [x] - implement the move left/right camera menu item
* [ ] - configure camera widgets to be a video stream
    * [videojs with contrib-hls](https://github.com/videojs/videojs-contrib-hls)
    * [jsmpeg](https://github.com/phoboslab/jsmpeg)
    * [html5-rtsp](https://github.com/Streamedian/html5_rtsp_player)
* [ ] - configure snap shot to send image to phone (simplepush, pushbullet, etc?)
* [ ] - add graphs (come up with data to graph)
* [ ] - create backend architecture

## Libraries used
* [Angular Material 2](https://github.com/angular/material2)
* [Animated Weather Icons](https://codepen.io/joshbader/pen/EjXgqr)

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
