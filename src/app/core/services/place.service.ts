import { IPending } from './../models/general/IPending';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, defer, map, ReplaySubject, retry, tap } from 'rxjs';

import { IAppState } from 'src/app/store/state/app.state';
import { environment } from 'src/environments/environment';
import { IPlace, IPlaceApiResult, ISearchPlaceQuery } from '../models';
import { EPendingStatus } from '../models/Enumeration/EPendingStatus';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  placeList: IPlaceApiResult['personList'] = [];

  constructor(private http: HttpClient, private _store: Store<IAppState>) {
    this.http
      .get<IPlaceApiResult>(
        `${environment.baseUrl}/places?Near=50&Address=Köln`,
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
      .get<IPlaceApiResult>(
        `${environment.baseUrl}/places?searchText=${queryParams.search}&Near=${queryParams.near}&Address=${queryParams.address}`,
        {
          observe: 'response',
        }
      )

      .pipe(
        retry(2),
        catchError((error) => {
          status.next(EPendingStatus.ERROR);
          throw 'error loading user';
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
