import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { find, map } from 'rxjs';

import { IAppState } from 'src/app/store/state/app.state';
import { environment } from 'src/environments/environment';
import { IPlace } from '../models';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  placeList: IPlace[] = [];

  constructor(private http: HttpClient, private _store: Store<IAppState>) {
    this.http
      .get<any>(`${environment.baseUrl}/places?Near=50&Address=köln`, {
        observe: 'response',
      })
      .subscribe((item) => {
        this.placeList = item.body;
      })
      .unsubscribe();
  }

  getPlaceList() {
    return this.http
      .get<any>(`${environment.baseUrl}/places?Near=50&Address=köln`, {
        observe: 'response',
      })
      .pipe(
        map((item) => {
          this.placeList = item.body;
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
