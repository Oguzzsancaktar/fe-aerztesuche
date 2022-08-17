import { selectDoctorDetailModalDoctorId } from './../../store/selectors/doctor-detail-modal.selectors';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { IAppState } from '../../store/state/app.state';
import { Store, select } from '@ngrx/store';
import { DoctorDetailModalService } from './doctor-detail-modal.service';
import { PlaceService } from './place.service';
import { Observable } from 'rxjs';
import { selectPlaceQueryParamsState } from 'src/app/store/selectors/place-query-params.selectors';
import { ISearchPlaceQuery } from '../models';

@Injectable()
export class MarkerService {
  selectedDoctorId$ = this._store.pipe(select(selectDoctorDetailModalDoctorId));

  searchQueryParams$: Observable<ISearchPlaceQuery> = this._store.pipe(
    select(selectPlaceQueryParamsState)
  );

  constructor(
    private _store: Store<IAppState>,
    private _doctorDetailModalService: DoctorDetailModalService,
    private _placeService: PlaceService
  ) {}

  static scaledRadius(val: number, maxVal: number): number {
    return 20 * (val / maxVal);
  }

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
      this._placeService.getPlaceList(queryParams).subscribe((res: any) => {
        this.removeCapitalMarkers(map);

        for (const doctor of res.body.personList) {
          const lon = doctor.place.longitute;
          const lat = doctor.place.latitude;

          const marker = L.marker([lat, lon]);

          marker.on('click', (x) => {
            this._doctorDetailModalService.openDoctorDetailModal(
              doctor.id,
              map,
              lat,
              lon
            );

            this._placeService.findPlaceWithLonLat(lon, lat);
          });

          marker.addTo(map);
        }
      });
    });
  }
}
