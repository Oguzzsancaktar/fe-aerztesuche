import { ISearchPlaceQuery } from 'src/app/core/models';
import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/store/state/app.state';
import { IPlace } from '../../models';
import { PlaceService } from '../../services/place.service';
import { selectPlaceQueryParamsState } from 'src/app/store/selectors/place-query-params.selectors';

@Component({
  selector: 'app-direction-list',
  templateUrl: './direction-list.component.html',
  styleUrls: ['./direction-list.component.scss'],
})
export class DirectionListComponent implements OnInit {
  @Input() map: any;
  public subscription_place_list$: IPlace[] = [];

  searchQueryParams$: Observable<ISearchPlaceQuery> = this._store.pipe(
    select(selectPlaceQueryParamsState)
  );

  constructor(
    private _placeService: PlaceService,
    private _store: Store<IAppState>
  ) {
    this.searchQueryParams$.subscribe((queryParams) => {
      this._placeService.getPlaceList(queryParams).subscribe((item) => {
        this.subscription_place_list$ = item.body?.personList || [];
      });
    });

    // this._placeService.getPlaceList().subscribe((item) => {
    //   this.subscription_place_list$ = item.body;
    // });
  }

  ngOnInit(): void {}
}
