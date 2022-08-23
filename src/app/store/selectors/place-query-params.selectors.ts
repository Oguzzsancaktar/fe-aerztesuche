import { createSelector } from '@ngrx/store';
import { ISearchPlaceQuery } from 'src/app/models';
import { IAppState } from '../state/app.state';

const selectAppState = (state: IAppState) => state.placeQueryParamsState;

export const selectPlaceQueryParamsState = createSelector(
  selectAppState,
  (state: ISearchPlaceQuery) => state
);
