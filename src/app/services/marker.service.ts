import { selectDoctorDetailModalDoctorId } from './../store/selectors/doctor-detail-modal.selectors';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { IAppState } from '../store/state/app.state';
import { Store, select } from '@ngrx/store';
import { DoctorDetailModalService } from './doctor-detail-modal.service';
import { PlaceService } from './place.service';
import { Observable, Subscription } from 'rxjs';
import { selectPlaceQueryParamsState } from 'src/app/store/selectors/place-query-params.selectors';
import { ISearchPlaceQuery } from '../models';
import { ChangeMapLoadingState } from 'src/app/store/actions/map-state.actions';
import 'leaflet.markercluster';

@Injectable()
export class MarkerService {
  selectedDoctorId$ = this._store.pipe(select(selectDoctorDetailModalDoctorId));

  searchQueryParams$: Observable<ISearchPlaceQuery> = this._store.pipe(
    select(selectPlaceQueryParamsState)
  );

  getPlaceListForMapSubscription: Subscription = new Subscription();

  constructor(
    private _store: Store<IAppState>,
    private _doctorDetailModalService: DoctorDetailModalService,
    private _placeService: PlaceService
  ) {}

  removeCapitalMarkers(map: L.Map): void {
    map.eachLayer((layer: any) => {
      if (layer?.options?.icon?.options?.iconUrl?.includes('icon')) {
        map.removeLayer(layer);
      }
    }),
      (error: any) => {
        console.log('err==>', error);
      };
  }

  makeCapitalMarkers(map: L.Map): void {
    this.searchQueryParams$.subscribe((queryParams) => {
      this._store.dispatch(new ChangeMapLoadingState(true));

      if (this.getPlaceListForMapSubscription) {
        this.getPlaceListForMapSubscription.unsubscribe();
      }

      this.getPlaceListForMapSubscription = this._placeService
        .getPlaceListForMap(queryParams)
        .data.subscribe(
          (res: any) => {
            this.removeCapitalMarkers(map);

            let markers = L.markerClusterGroup();

            for (const mapPlace of res.body) {
              const lon = mapPlace.longitute;
              const lat = mapPlace.latitude;
              const marker = L.marker([lat, lon]);

              marker.on('click', (x) => {
                this._doctorDetailModalService.openDoctorDetailModal(
                  mapPlace.personId,
                  map,
                  lat,
                  lon
                );

                this._placeService.findPlaceWithLonLat(lon, lat);
              });

              markers.addLayer(marker);
            }

            markers.addTo(map);
          },
          (err) => {
            console.log('err==>', err);
          },
          () => {
            this._store.dispatch(new ChangeMapLoadingState(false));
          }
        );
    });
  }
}
