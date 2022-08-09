import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from 'src/app/core/services/marker.service';
import 'leaflet.markercluster';

const iconRetinaUrlBlue = 'assets/icon-material-location-on-blue.svg';
const iconRetinaUrlRed = 'assets/icon-material-location-on-red.svg';

const iconUrl = 'assets/marker-icon.png';
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
export class MapComponent implements AfterViewInit {
  private map: any;

  constructor(private markerService: MarkerService) {}

  private initMap(): void {
    this.map = L.map('map', {
      attributionControl: false,
      center: [51.23129, 6.74847],
      zoom: 13,
    });

    const googleStreets = L.tileLayer(
      'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
      {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      }
    );

    googleStreets.addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.markerService.makeCapitalMarkers(this.map);
    this.map.zoomControl.setPosition('bottomright');
    L.control.scale({ position: 'bottomright' }).addTo(this.map);
  }
}
