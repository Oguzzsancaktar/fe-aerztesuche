import { nearOptions } from './../../constants/nearOptions';
import {
  SetPlaceSearchQueryParams,
  SetPlaceAddressQueryParams,
  SetPlaceNearQueryParams,
} from '../../store/actions/place-query-params.actions';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { debounce } from 'lodash';
import { IFilter, IOption, ISearchPlaceQuery } from '../../models';
import { Observable } from 'rxjs';
import { selectPlaceQueryParamsState } from 'src/app/store/selectors/place-query-params.selectors';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  @Input() showFilterSection?: boolean;
  @Output() handleFilterSectionEmitter = new EventEmitter<boolean>();
  showDropdown: boolean = false;
  nearOptionList = nearOptions;

  searchQueryParams$: Observable<ISearchPlaceQuery> = this._store.pipe(
    select(selectPlaceQueryParamsState)
  );

  selectedNearOption$?: IOption;

  constructor(private _store: Store<IAppState>) {
    this.handleSearchChange = debounce(this.handleSearchChange, 500);
    this.handleLocationChange = debounce(this.handleLocationChange, 500);
    this.handleNearChange = debounce(this.handleNearChange, 500);

    this.searchQueryParams$.subscribe((queryParams) => {
      this.selectedNearOption$ = nearOptions.find(
        (option) => option.value.toString() === queryParams.near.toString()
      );
    });
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  handleNearOptionSelect(value: IOption['value']) {
    this.toggleDropdown();
    this.handleNearChange(value);
  }

  handleNearChange(value: IOption['value']) {
    this._store.dispatch(new SetPlaceNearQueryParams({ near: +value }));
  }

  handleSearchChange(event: any) {
    this._store.dispatch(
      new SetPlaceSearchQueryParams({ searchText: event.target.value })
    );
  }

  handleLocationChange(event: any) {
    this._store.dispatch(
      new SetPlaceAddressQueryParams({ address: event.target.value })
    );
  }

  handleFilterIconClick() {
    this.handleFilterSectionEmitter.emit(!this.showFilterSection);
  }

  ngOnInit(): void {}
}
