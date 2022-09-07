import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject, retry, catchError, tap, map, defer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPlace, ISearchPlaceQuery, EPendingStatus, IPending } from '../models';
import IPlaceApiResult from '../models/entities/general/IPlaceApiResult';
import IMapPlaceApiResult from '../models/entities/map/IMapPlaceApiResult';
import { initialPlaceQueryParamsState } from '../store/state/place-query-params.state';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  placeList: IPlaceApiResult['personList'] = [];
  mapPlaceList: IMapPlaceApiResult['placeList'] = [];
  selectedPlace: IPlace[] | undefined;

  constructor(private http: HttpClient) {
    this.http
      .post<IPlaceApiResult>(
        `${environment.baseUrl}/places`,
        {
          ...initialPlaceQueryParamsState,
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
        catchError((_error) => {
          status.next(EPendingStatus.ERROR);
          throw _error;
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

  findPlaceWithLonLat(lon: number, lat: number, address: string = '') {
    const request = this.http
      .get<IPlace[]>(
        `${environment.baseUrl}/places/${lat}/${lon}?address=${address}`
      )
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
