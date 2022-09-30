import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import * as L from 'leaflet';
import { Observable } from 'rxjs';
import { IPlace, IPlaceApiResult } from 'src/app/models';
import { selectWillMapLoad } from 'src/app/store/selectors/map-state.selector';
import { IAppState } from 'src/app/store/state/app.state';

const iconRetinaUrlRed = 'assets/icon-material-location-on-red.svg';
const iconUrl = 'assets/icon-material-location-on-red.svg';
const iconSelectedLocation = L.icon({
  iconRetinaUrl: iconRetinaUrlRed,
  iconUrl,
  iconSize: [40, 40],
  iconAnchor: [20, 20],
});

@Component({
  selector: 'app-single-map-location',
  templateUrl: './single-map-location.component.html',
  styleUrls: ['./single-map-location.component.scss'],
})
export class SingleMapLocationComponent implements OnInit {
  @Input() coords?: IPlace['place'];
  public singleMap!: L.Map;
  private searchLatitude: IPlaceApiResult['searchLatitude'] = 50.937531;
  private searchLongitude: IPlaceApiResult['searchLongitude'] = 6.9602786;

  mapWillLoadState$: Observable<boolean> = this._store.pipe(
    select(selectWillMapLoad)
  );

  constructor(private _store: Store<IAppState>, private router: Router) {}

  private initSingleMap(location?: IPlace['place']): void {
    if (this.singleMap) {
      this.singleMap?.remove();
    }

    if (location) {
      this.searchLatitude = location.latitude;
      this.searchLongitude = location.longitute;
    }

    this.singleMap = L.map('singleMap', {
      attributionControl: false,
      center: [this.searchLatitude, this.searchLongitude],
      zoom: 15,
      zoomControl: false,
      scrollWheelZoom: false,
      dragging: false,
    });

    const googleStreets = L.tileLayer(
      'https://{s}.google.com/vt/lyrs=m&hl=de&x={x}&y={y}&z={z}',
      {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      }
    );

    const marker = L.marker([this.searchLatitude, this.searchLongitude]);
    marker.setIcon(iconSelectedLocation);
    this.singleMap.addLayer(marker);

    googleStreets.addTo(this.singleMap);
  }

  ngOnInit() {
    const isMapWillLoad = this.router.url.includes('consent=true');

    if (isMapWillLoad) {
      this.initSingleMap(this.coords);
    }
  }
}
