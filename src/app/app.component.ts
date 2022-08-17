import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';
  data = [
    { lat: 40.5, lng: -85.5 },
    { lat: 40.5 + 3, lng: -85.5 },
    { lat: 41.5, lng: -95.5 },
    { lat: 41.5 - 3, lng: -95.5 },
  ];
  test() {}
}
