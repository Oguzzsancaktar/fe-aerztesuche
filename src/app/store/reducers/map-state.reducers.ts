import { IMapLoadingState } from 'src/app/core/models';
import {
  EMapStateActions,
  MapStateActions,
} from '../actions/map-state.actions';
import { initialMapLoadingState } from '../state/map-loading.state';

export const CHANGE_MAP_LOADING_STATE = 'CHANGE_MAP_LOADING_STATE';
export const CHANGE_MAP_WILL_LOAD_STATE = 'CHANGE_MAP_WILL_LOAD_STATE';

export const mapStateReducer = (
  state: IMapLoadingState = initialMapLoadingState,
  action: MapStateActions
): IMapLoadingState => {
  switch (action.type) {
    case EMapStateActions.CHANGE_MAP_LOADING_STATE: {
      return {
        ...state,
        isMapLoading: action.payload,
      };
    }
    case EMapStateActions.CHANGE_MAP_WILL_LOAD_STATE: {
      return {
        ...state,
        willMapLoad: action.payload,
      };
    }

    default:
      return state;
  }
};
