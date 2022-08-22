import { ISearchPlaceQuery } from 'src/app/core/models';
import { Action } from '@ngrx/store';

export enum EPlaceQueryParamsActions {
  SET_PLACE_SEARCH_QUERY_PARAMS = '[PlaceQueryParams] SET_PLACE_SEARCH_QUERY_PARAMS',
  SET_PLACE_NEAR_QUERY_PARAMS = '[PlaceQueryParams] SET_PLACE_NEAR_QUERY_PARAMS',
  SET_PLACE_ADDRESS_QUERY_PARAMS = '[PlaceQueryParams] SET_PLACE_ADDRESS_QUERY_PARAMS',

  CLEAR_PLACE_QUERY_PARAMS = '[PlaceQueryParams] Clear Place Query Params',
}

export class SetPlaceSearchQueryParams implements Action {
  public readonly type = EPlaceQueryParamsActions.SET_PLACE_SEARCH_QUERY_PARAMS;
  constructor(public payload: Pick<ISearchPlaceQuery, 'searchText'>) {}
}

export class SetPlaceNearQueryParams implements Action {
  public readonly type = EPlaceQueryParamsActions.SET_PLACE_NEAR_QUERY_PARAMS;
  constructor(public payload: Pick<ISearchPlaceQuery, 'near'>) {}
}

export class SetPlaceAddressQueryParams implements Action {
  public readonly type =
    EPlaceQueryParamsActions.SET_PLACE_ADDRESS_QUERY_PARAMS;
  constructor(public payload: Pick<ISearchPlaceQuery, 'address'>) {}
}

export class ClearPlaceQueryParams implements Action {
  public readonly type = EPlaceQueryParamsActions.CLEAR_PLACE_QUERY_PARAMS;
}

export type PlaceQueryParamsActions =
  | SetPlaceSearchQueryParams
  | SetPlaceNearQueryParams
  | SetPlaceAddressQueryParams
  | ClearPlaceQueryParams;
