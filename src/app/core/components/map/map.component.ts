import { Component, Input } from '@angular/core';
import * as L from 'leaflet';

const iconRetinaUrlBlue = 'assets/icon-material-location-on-blue.svg';

const iconUrl = 'assets/icon-material-location-on-blue.svg';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl: iconRetinaUrlBlue,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  @Input() map: any;
}
