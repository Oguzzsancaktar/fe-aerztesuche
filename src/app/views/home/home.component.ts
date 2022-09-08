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
  searchLatitude: IPlaceApiResult['searchLatitude'] = 51.095123;
  searchLongitude: IPlaceApiResult['searchLongitude'] = 10.271483;
  filterList: IFilter[] = [];
  placeList: IPlace[] = [];
  totalPlaceCount: number = 0;
  isPlacesLoading: boolean = true;
  pageNumber: number = 1;
  searchQueryParamsClone: ISearchPlaceQuery = initialPlaceQueryParamsState;
  scrollAreaElement: ElementRef<HTMLInputElement> | undefined;

  isAddressEmpty: boolean = true;

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

      if (queryParams.address.trim().length > 3) {
        this.onScrollingFinished(undefined, queryParams.near);
        this.isAddressEmpty = false;
        this._store.dispatch(new ChangeMapLoadingState(true));
      } else {
        this.isPlacesLoading = false;
        this.isAddressEmpty = true;
        this._store.dispatch(new ChangeMapLoadingState(false));
      }
    });

    this.isDoctorDetailModalOpen$ = this._store.pipe(
      select(selectDoctorDetailModalIsOpen)
    );

    this.handlePermission();
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
        this.positionDenied();
      }
      result.addEventListener('change', () => {});
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
    this.isPlacesLoading = false;
    this._store.dispatch(new ChangeMapLoadingState(false));

    // this._store.dispatch(new SetPlaceNearQueryParams(1000));
    // this._store.dispatch(new SetPlaceAddressQueryParams(''));
  }

  onScrollingFinished(
    scrollElementRef?: ElementRef<HTMLInputElement>,
    near?: number
  ) {
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
        let tempNear = near;

        if (data.searchLatitude) {
          this.searchLatitude = data.searchLatitude;
        } else {
          tempNear = 1000;
        }
        if (data.searchLongitude) {
          this.searchLongitude = data.searchLongitude;
        } else {
          tempNear = 1000;
        }

        if (!near) {
          tempNear = 1000;
        }

        this.filterList = data.filterList;
        this.placeList = this.placeList.concat(data.personList);
        this.totalPlaceCount = data.totalCount;
        this.isPlacesLoading = false;

        if (this.pageNumber === 1) {
          this.initMap(
            {
              coords: {
                latitude: this.searchLatitude,
                longitude: this.searchLongitude,
              },
            },
            tempNear
          );
        }
      });
  }

  private initMap(
    location?:
      | GeolocationPosition
      | {
          coords: {
            latitude: number;
            longitude: number;
          };
        },
    near?: number
  ): void {
    const isMapWillLoad = this.router.url.includes('consent=true');
    let mapZoom = 10;
    if (isMapWillLoad) {
      if (this.map) {
        this.map?.remove();
      }

      if (location) {
        this.searchLatitude = location.coords.latitude;
        this.searchLongitude = location.coords.longitude;
      } else {
        this.searchLatitude = 50.937531;
        this.searchLongitude = 6.9602786;
      }

      switch (near) {
        case 1000:
          mapZoom = 7;
          break;
        case 200:
          mapZoom = 11;
          break;

        case 100:
          mapZoom = 12;
          break;

        case 50:
          mapZoom = 13;
          break;

        case 25:
          mapZoom = 14;
          break;

        case 10:
          mapZoom = 15;
          break;
        case 5:
          mapZoom = 16;
          break;
        case 1:
          mapZoom = 17;
          break;
      }

      this.map = L.map('map', {
        attributionControl: false,
        center: [this.searchLatitude, this.searchLongitude],
        zoom: mapZoom || 5,
      });

      const googleStreets = L.tileLayer(
        'http://{s}.google.com/vt/lyrs=m&hl=de&x={x}&y={y}&z={z}',
        {
          maxZoom: 20,
          subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        }
      );

      if (this.searchQueryParamsClone.address.trim().length > 0) {
        const marker = L.marker([this.searchLatitude, this.searchLongitude]);
        marker.setIcon(iconSelectedLocation);
        this.map.addLayer(marker);

        this.markerService.makeMarkers(this.map);
      }

      googleStreets.addTo(this.map);

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
