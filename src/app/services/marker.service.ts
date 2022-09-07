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
import { initialPlaceQueryParamsState } from '../store/state/place-query-params.state';
import 'leaflet.markercluster';

@Injectable()
export class MarkerService {
  searchQueryParams$: Observable<ISearchPlaceQuery> = this._store.pipe(
    select(selectPlaceQueryParamsState)
  );
  searchQueryParamsClone: ISearchPlaceQuery = initialPlaceQueryParamsState;

  getPlaceListForMapSubscription: Subscription = new Subscription();

  constructor(
    private _store: Store<IAppState>,
    private _doctorDetailModalService: DoctorDetailModalService,
    private _placeService: PlaceService
  ) {
    this.searchQueryParams$.subscribe((queryParams) => {
      this.searchQueryParamsClone = queryParams;
    });
  }

  removeMarkers(map: L.Map): void {
    map.eachLayer((layer: any) => {
      if (layer?.options?.icon?.options?.iconRetinaUrl?.includes('blue')) {
        map.removeLayer(layer);
      }
    }),
      (error: any) => {
        console.log('err==>', error);
      };
  }

  makeMarkers(map: L.Map): void {
    this.searchQueryParams$.subscribe((queryParams) => {
      this._store.dispatch(new ChangeMapLoadingState(true));

      if (this.getPlaceListForMapSubscription) {
        this.getPlaceListForMapSubscription.unsubscribe();
      }

      if (queryParams.address.trim().length > 0) {
        this.getPlaceListForMapSubscription = this._placeService
          .getPlaceListForMap(queryParams)
          .data.subscribe(
            (res: any) => {
              this.removeMarkers(map);

              let markers = L.markerClusterGroup();

              for (const mapPlace of res.body) {
                const lon = mapPlace.longitute;
                const lat = mapPlace.latitude;
                const marker = L.marker([lat, lon]);

                marker.on('click', () => {
                  this._doctorDetailModalService.openDoctorDetailModal(
                    mapPlace.personId,
                    map,
                    lat,
                    lon
                  );

                  this._placeService.findPlaceWithLonLat(
                    lon,
                    lat,
                    this.searchQueryParamsClone.address
                  );
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
      } else {
        this.removeMarkers(map);
        this._store.dispatch(new ChangeMapLoadingState(false));
      }
    });
  }
}
