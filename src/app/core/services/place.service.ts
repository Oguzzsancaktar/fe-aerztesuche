import { IPending } from './../models/general/IPending';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, defer, map, ReplaySubject, retry, tap } from 'rxjs';

import { IAppState } from 'src/app/store/state/app.state';
import { environment } from 'src/environments/environment';
import { IPlace, IPlaceApiResult, ISearchPlaceQuery } from '../models';
import { EPendingStatus } from '../models/Enumeration/EPendingStatus';
import IMapPlace from '../models/IMapPlace';
import IMapPlaceApiResult from '../models/IMapPlaceApiResult';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  placeList: IPlaceApiResult['personList'] = [];
  mapPlaceList: IMapPlaceApiResult['placeList'] = [];

  constructor(private http: HttpClient, private _store: Store<IAppState>) {
    this.http
      .post<IPlaceApiResult>(
        `${environment.baseUrl}/places`,
        {
          searchText: '',
          near: 50,
          address: 'Köln',
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

  getPlaceList(
    queryParams: ISearchPlaceQuery
  ): IPending<HttpResponse<IPlaceApiResult>> {
    const status = new ReplaySubject<EPendingStatus>();

    const request = this.http
      .post<IPlaceApiResult>(
        `${environment.baseUrl}/places`,
        {
          searchText: queryParams.search,
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
          this.placeList = item.body?.personList || [];
          return item;
        })
      );

    const data = defer(() => {
      status.next(EPendingStatus.LOADING);
      return request;
    });

    return { data, status };
  }

  getPlaceListForMap(
    queryParams: ISearchPlaceQuery
  ): IPending<HttpResponse<IMapPlaceApiResult>> {
    const status = new ReplaySubject<EPendingStatus>();

    const request = this.http
      .post<IMapPlaceApiResult>(
        `${environment.baseUrl}/map`,
        {
          searchText: queryParams.search,
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

  findPlaceWithLonLat(lon: number, lat: number): IPlace | undefined {
    const selectedPlace = this.placeList.find((place) => {
      return place.place.longitute === lon && place.place.latitude === lat;
    });

    if (selectedPlace) {
      return selectedPlace;
    } else {
      return undefined;
    }
  }
}
