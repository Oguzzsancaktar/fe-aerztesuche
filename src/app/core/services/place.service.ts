import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { find, map } from 'rxjs';

import { IAppState } from 'src/app/store/state/app.state';
import { environment } from 'src/environments/environment';
import { IPlace, IPlaceApiResult, ISearchPlaceQuery } from '../models';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  placeList: IPlaceApiResult['personList'] = [];

  constructor(private http: HttpClient, private _store: Store<IAppState>) {
    this.http
      .get<IPlaceApiResult>(
        `${environment.baseUrl}/places?Near=50&Address=köln`,
        {
          observe: 'response',
        }
      )
      .subscribe((item) => {
        this.placeList = item.body?.personList || [];
      })
      .unsubscribe();
  }

  getPlaceList(queryParams: ISearchPlaceQuery) {
    return this.http
      .get<IPlaceApiResult>(
        `${environment.baseUrl}/places?searchText=${queryParams.search}&Near=${queryParams.near}&Address=${queryParams.address}`,
        {
          observe: 'response',
        }
      )
      .pipe(
        map((item) => {
          this.placeList = item.body?.personList || [];
          return item;
        })
      );
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
