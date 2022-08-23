import { initialPlaceQueryParamsState } from '../../store/state/place-query-params.state';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IPlace, IPlaceApiResult, ISearchPlaceQuery } from 'src/app/models';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/store/state/app.state';
import { selectPlaceQueryParamsState } from 'src/app/store/selectors/place-query-params.selectors';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-direction-list',
  templateUrl: './direction-list.component.html',
  styleUrls: ['./direction-list.component.scss'],
})
export class DirectionListComponent {
  @Input() map: any;
  @ViewChild('scrollArea') scrollArea!: ElementRef<HTMLInputElement>;
  isPlacesLoading: boolean = true;
  pageNumber: number = 1;
  places: IPlace[] = [];
  totalCount: number = 0;
  searchQueryParamsClone: ISearchPlaceQuery = initialPlaceQueryParamsState;

  searchQueryParams$: Observable<ISearchPlaceQuery> = this._store.pipe(
    select(selectPlaceQueryParamsState)
  );

  constructor(private _store: Store<IAppState>, private http: HttpClient) {
    this.searchQueryParams$.subscribe((queryParams) => {
      if (this.scrollArea?.nativeElement?.scrollTop) {
        this.scrollArea.nativeElement.scrollTop = 0;
      }

      this.places = [];
      this.pageNumber = 1;
      this.isPlacesLoading = true;
      this.searchQueryParamsClone = queryParams;
      this.onScrollingFinished();
    });
  }

  onScrollingFinished() {
    const url = `${environment.baseUrl}/places`;

    this.isPlacesLoading = true;
    this.pageNumber++;

    this.http
      .post<IPlaceApiResult>(url, {
        ...this.searchQueryParamsClone,
        page: this.pageNumber,
        pageSize: 10,
      })
      .subscribe((data) => {
        this.totalCount = data.totalCount;
        this.places = this.places.concat(data.personList);
        this.isPlacesLoading = false;
      });
  }
}
