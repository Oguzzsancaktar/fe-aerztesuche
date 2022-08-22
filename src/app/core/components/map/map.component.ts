import { selectWillMapLoad } from './../../../store/selectors/map-state.selector';
import { Component, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as L from 'leaflet';
import { Observable } from 'rxjs';
import {
  selectIsMapLoading,
  selectMapState,
} from 'src/app/store/selectors/map-state.selector';
import { IAppState } from 'src/app/store/state/app.state';

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

  mapLoadingState$: Observable<boolean> = this._store.pipe(
    select(selectIsMapLoading)
  );

  mapWillLoadState$: Observable<boolean> = this._store.pipe(
    select(selectWillMapLoad)
  );

  constructor(private _store: Store<IAppState>) {}
}
