import { SetPlaceAddressQueryParams } from './../../store/actions/place-query-params.actions';
import {
  ChangeMapLoadingState,
  ChangeMapWillLoadState,
} from './../../store/actions/map-state.actions';
import { IAppState } from './../../store/state/app.state';
import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as L from 'leaflet';
import { MarkerService } from '../../services/marker.service';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import {
  IDoctorDetailModalState,
  IFilter,
  IPlace,
  IPlaceApiResult,
  ISearchPlaceQuery,
} from 'src/app/models';

import { selectPlaceQueryParamsState } from 'src/app/store/selectors/place-query-params.selectors';
import { initialPlaceQueryParamsState } from 'src/app/store/state/place-query-params.state';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { selectDoctorDetailModalIsOpen } from 'src/app/store/selectors/doctor-detail-modal.selectors';
import { SetPlaceNearQueryParams } from 'src/app/store/actions/place-query-params.actions';

const iconRetinaUrlRed = 'assets/icon-your-location.svg';
const iconUrl = 'assets/icon-your-location.svg';
const iconSelectedLocation = L.icon({
  iconRetinaUrl: iconRetinaUrlRed,
  iconUrl,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public map!: L.Map;
  getPlacesForListSubscription: Subscription = new Subscription();
  showFilterSection: boolean = false;
  searchLatitude: IPlaceApiResult['searchLatitude'] = 50.937531;
  searchLongitude: IPlaceApiResult['searchLongitude'] = 6.9602786;
  filterList: IFilter[] = [];
  placeList: IPlace[] = [];
  totalPlaceCount: number = 0;
  isPlacesLoading: boolean = true;
  pageNumber: number = 1;
  searchQueryParamsClone: ISearchPlaceQuery = initialPlaceQueryParamsState;
  scrollAreaElement: ElementRef<HTMLInputElement> | undefined;
  searchQueryParams$: Observable<ISearchPlaceQuery> = this._store.pipe(
    select(selectPlaceQueryParamsState)
  );

  public isDoctorDetailModalOpen$: Observable<
    IDoctorDetailModalState['isModalOpen']
  >;

  constructor(
    private _store: Store<IAppState>,
    private markerService: MarkerService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private http: HttpClient
  ) {
    this.searchQueryParams$.subscribe((queryParams) => {
      if (this.scrollAreaElement?.nativeElement?.scrollTop) {
        this.scrollAreaElement.nativeElement.scrollTop = 0;
      }
      this.filterList = [];
      this.placeList = [];
      this.pageNumber = 0;
      this.isPlacesLoading = true;
      this.searchQueryParamsClone = queryParams;

      this.onScrollingFinished();
    });

    this.isDoctorDetailModalOpen$ = this._store.pipe(
      select(selectDoctorDetailModalIsOpen)
    );

    this.handlePermission();
  }

  private report(state: string) {
    console.log(`Permission ${state}`);
  }

  private getGeoLocationCurrentPosition() {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => this.revealPosition(position),
      this.positionDenied
    );
  }

  private handlePermission() {
    navigator.permissions.query({ name: 'geolocation' }).then((result) => {
      if (result.state === 'granted') {
        this.getGeoLocationCurrentPosition();
      } else if (result.state === 'prompt') {
        this.getGeoLocationCurrentPosition();
      } else if (result.state === 'denied') {
        this.report(result.state);
      }
      result.addEventListener('change', () => {
        this.report(result.state);
      });
    });
  }

  private revealPosition(position: GeolocationPosition) {
    this.http
      .get<{ address: string }>(
        `${environment.baseUrl}/address?lat=${position.coords.latitude}&lng=${position.coords.longitude}`
      )
      .subscribe(({ address }) => {
        this._store.dispatch(new SetPlaceAddressQueryParams(address));
        this._store.dispatch(new SetPlaceNearQueryParams(5));
      });
  }

  private positionDenied() {
    this.initMap();
    this._store.dispatch(new SetPlaceNearQueryParams(1000));
    this._store.dispatch(new SetPlaceAddressQueryParams(''));
  }

  onScrollingFinished(scrollElementRef?: ElementRef<HTMLInputElement>) {
    const url = `${environment.baseUrl}/places`;

    this.scrollAreaElement = scrollElementRef;
    this.isPlacesLoading = true;
    this.pageNumber++;

    if (this.getPlacesForListSubscription && !scrollElementRef) {
      this.getPlacesForListSubscription.unsubscribe();
    }

    this.getPlacesForListSubscription = this.http
      .post<IPlaceApiResult>(url, {
        ...this.searchQueryParamsClone,
        page: this.pageNumber,
      })
      .subscribe((data) => {
        this.searchLatitude = data.searchLatitude;
        this.searchLongitude = data.searchLongitude;
        this.filterList = data.filterList;
        this.placeList = this.placeList.concat(data.personList);
        this.totalPlaceCount = data.totalCount;
        this.isPlacesLoading = false;
        this.initMap();
      });
  }

  private initMap(location?: GeolocationPosition): void {
    const isMapWillLoad = this.router.url.includes('consent=true');
    if (isMapWillLoad) {
      if (this.map) {
        this.map?.remove();
      }

      if (location) {
        this.searchLatitude = location.coords.latitude;
        this.searchLongitude = location.coords.longitude;
      }

      this.map = L.map('map', {
        attributionControl: false,
        center: [this.searchLatitude, this.searchLongitude],
        zoom: 10,
      });

      const googleStreets = L.tileLayer(
        'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
        {
          maxZoom: 20,
          subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        }
      );

      if (this.searchQueryParamsClone.address.length) {
        const marker = L.marker([this.searchLatitude, this.searchLongitude]);
        marker.setIcon(iconSelectedLocation);
        this.map.addLayer(marker);
      }

      googleStreets.addTo(this.map);
      this.markerService.makeMarkers(this.map);
      this.map.zoomControl.setPosition('bottomright');
      L.control.scale({ position: 'bottomright' }).addTo(this.map);
      this.cdr.detectChanges();
      this._store.dispatch(new ChangeMapWillLoadState(true));
    } else {
      this._store.dispatch(new ChangeMapLoadingState(false));
      this._store.dispatch(new ChangeMapWillLoadState(false));
    }
  }

  handleFilterSection(show: boolean) {
    this.showFilterSection = show;
  }
}
