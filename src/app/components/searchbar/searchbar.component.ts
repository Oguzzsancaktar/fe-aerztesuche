import { nearOptions } from './../../constants/nearOptions';
import {
  SetPlaceSearchQueryParams,
  SetPlaceAddressQueryParams,
  SetPlaceNearQueryParams,
} from '../../store/actions/place-query-params.actions';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { debounce } from 'lodash';
import { IOption, ISearchPlaceQuery } from '../../models';
import { Observable } from 'rxjs';
import { selectPlaceQueryParamsState } from 'src/app/store/selectors/place-query-params.selectors';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent {
  @Input() showFilterSection?: boolean;
  @Output() handleFilterSectionEmitter = new EventEmitter<boolean>();
  showDropdown: boolean = false;
  nearOptionList = nearOptions;
  allowNearOptionSelect: boolean = false;

  searchQueryParams$: Observable<ISearchPlaceQuery> = this._store.pipe(
    select(selectPlaceQueryParamsState)
  );

  selectedNearOption$?: IOption;

  constructor(private _store: Store<IAppState>) {
    this.handleSearchChange = debounce(this.handleSearchChange, 500);
    this.handleLocationChange = debounce(this.handleLocationChange, 500);
    this.handleNearChange = debounce(this.handleNearChange, 500);

    this.searchQueryParams$.subscribe((queryParams) => {
      if (queryParams.address) {
        this.allowNearOptionSelect = true;
      } else {
        this.allowNearOptionSelect = false;
      }
      this.selectedNearOption$ = nearOptions.find(
        (option) => option.value.toString() === queryParams.near.toString()
      );
    });
  }

  toggleDropdown() {
    if (this.allowNearOptionSelect) {
      this.showDropdown = !this.showDropdown;
    }
  }

  handleNearOptionSelect(value: IOption['value']) {
    this.toggleDropdown();
    this.handleNearChange(value);
  }

  handleNearChange(value: IOption['value']) {
    this._store.dispatch(new SetPlaceNearQueryParams(+value));
  }

  handleSearchChange(event: any) {
    this._store.dispatch(new SetPlaceSearchQueryParams(event.target.value));
  }

  handleLocationChange(event: any) {
    if (event.target.value) {
      this._store.dispatch(new SetPlaceNearQueryParams(5));
      this.allowNearOptionSelect = true;
    } else {
      this.allowNearOptionSelect = false;
    }

    this._store.dispatch(new SetPlaceAddressQueryParams(event.target.value));
  }

  handleFilterIconClick() {
    this.handleFilterSectionEmitter.emit(!this.showFilterSection);
  }
}
