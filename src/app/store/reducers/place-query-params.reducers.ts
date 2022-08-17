import { initialPlaceQueryParamsState } from './../state/place-query-params.state';
import { ISearchPlaceQuery } from 'src/app/core/models';
import {
  EPlaceQueryParamsActions,
  PlaceQueryParamsActions,
} from '../actions/place-query-params.actions';

export const SET_PLACE_SEARCH_QUERY_PARAMS = 'SET_PLACE_SEARCH_QUERY_PARAMS';
export const SET_PLACE_NEAR_QUERY_PARAMS = 'SET_PLACE_NEAR_QUERY_PARAMS';
export const SET_PLACE_ADDRESS_QUERY_PARAMS = 'SET_PLACE_ADDRESS_QUERY_PARAMS';

export const CLEAR_PLACE_QUERY_PARAMS = 'CLEAR_PLACE_QUERY_PARAMS';

export const placeQueryParamsReducer = (
  state: ISearchPlaceQuery = initialPlaceQueryParamsState,
  action: PlaceQueryParamsActions
): ISearchPlaceQuery => {
  switch (action.type) {
    case EPlaceQueryParamsActions.SET_PLACE_SEARCH_QUERY_PARAMS: {
      return {
        ...state,
        search: action.payload.search,
      };
    }
    case EPlaceQueryParamsActions.SET_PLACE_NEAR_QUERY_PARAMS: {
      return {
        ...state,
        near: action.payload.near,
      };
    }
    case EPlaceQueryParamsActions.SET_PLACE_ADDRESS_QUERY_PARAMS: {
      return {
        ...state,
        address: action.payload.address,
      };
    }
    case EPlaceQueryParamsActions.CLEAR_PLACE_QUERY_PARAMS: {
      return {
        ...state,
        address: '',
        near: '50',
        search: '',
      };
    }
    default:
      return state;
  }
};
