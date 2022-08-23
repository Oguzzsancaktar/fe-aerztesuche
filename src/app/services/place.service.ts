import { IPending } from './../models/general/IPending';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, defer, map, ReplaySubject, retry, tap } from 'rxjs';

import { IAppState } from 'src/app/store/state/app.state';
import { environment } from 'src/environments/environment';
import { IPlace, IPlaceApiResult, ISearchPlaceQuery } from '../models';
import { EPendingStatus } from '../models/Enumeration/EPendingStatus';
import IMapPlaceApiResult from '../models/IMapPlaceApiResult';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  placeList: IPlaceApiResult['personList'] = [];
  mapPlaceList: IMapPlaceApiResult['placeList'] = [];
  selectedPlace: IPlace | undefined;

  constructor(private http: HttpClient, private _store: Store<IAppState>) {
    this.http
      .post<IPlaceApiResult>(
        `${environment.baseUrl}/places`,
        {
          searchText: '',
          near: 10,
          address: 'Köln',
          page: 1,
          pageSize: 10,
        },
        {
          observe: 'response',
        }
      )
      .subscribe((item) => {
        this.placeList = item.body?.personList || [];
      })
      .unsubscribe();
  }

  getPlaceListForMap(
    queryParams: ISearchPlaceQuery
  ): IPending<HttpResponse<IMapPlaceApiResult>> {
    const status = new ReplaySubject<EPendingStatus>();

    const request = this.http
      .post<IMapPlaceApiResult>(
        `${environment.baseUrl}/map`,
        {
          searchText: queryParams.searchText,
          near: queryParams.near,
          address: queryParams.address,
        },
        {
          observe: 'response',
        }
      )
      .pipe(
        retry(2),
        catchError((error) => {
          status.next(EPendingStatus.ERROR);
          throw 'error loading map';
        }),
        tap(() => status.next(EPendingStatus.SUCCESS)),
        map((item) => {
          this.mapPlaceList = item.body?.placeList || [];
          return item;
        })
      );

    const data = defer(() => {
      status.next(EPendingStatus.LOADING);
      return request;
    });

    return { data, status };
  }

  findPlaceWithLonLat(lon: number, lat: number) {
    const request = this.http
      .get<IPlace>(`${environment.baseUrl}/places/${lat}/${lon}`)
      .pipe(
        retry(2),
        map((item) => {
          this.selectedPlace = item;
          return item;
        })
      );

    return request.toPromise();
  }
}
