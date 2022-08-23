import {
  ChangeMapLoadingState,
  ChangeMapWillLoadState,
} from './../../store/actions/map-state.actions';
import { selectDoctorDetailModalState } from './../../store/selectors/doctor-detail-modal.selectors';
import { IAppState } from './../../store/state/app.state';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as L from 'leaflet';
import { MarkerService } from '../../services/marker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  public map!: L.Map;
  showFilterSection: boolean = false;

  doctorDetailModalState$ = this._store.pipe(
    select(selectDoctorDetailModalState)
  );

  constructor(
    private _store: Store<IAppState>,
    private markerService: MarkerService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  private initMap(): void {
    this.map = L.map('map', {
      attributionControl: false,
      center: [50.935173, 6.953101],
      zoom: 10,
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

  handleFilterSection(show: boolean) {
    this.showFilterSection = show;
  }

  ngAfterViewInit(): void {
    const isMapWillLoad = this.router.url.includes('consent=true');

    if (isMapWillLoad) {
      this.map?.remove();
      this.initMap();
      this.markerService.makeCapitalMarkers(this.map);
      this.map.zoomControl.setPosition('bottomright');
      L.control.scale({ position: 'bottomright' }).addTo(this.map);
      this.cdr.detectChanges();
      this._store.dispatch(new ChangeMapWillLoadState(true));
    } else {
      this._store.dispatch(new ChangeMapLoadingState(false));
      this._store.dispatch(new ChangeMapWillLoadState(false));
    }
  }
}
