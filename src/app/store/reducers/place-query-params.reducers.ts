import { initialPlaceQueryParamsState } from './../state/place-query-params.state';
import { ISearchPlaceQuery } from 'src/app/models';
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
        searchText: action.payload,
      };
    }
    case EPlaceQueryParamsActions.SET_PLACE_NEAR_QUERY_PARAMS: {
      return {
        ...state,
        near: action.payload,
      };
    }
    case EPlaceQueryParamsActions.SET_PLACE_ADDRESS_QUERY_PARAMS: {
      return {
        ...state,
        address: action.payload,
      };
    }
    case EPlaceQueryParamsActions.CLEAR_PLACE_QUERY_PARAMS: {
      return {
        ...state,
        address: '',
        near: 10,
        searchText: '',
      };
    }
    default:
      return state;
  }
};
