import {
  EMapStateActions,
  MapStateActions,
} from '../actions/map-state.actions';

export const CHANGE_MAP_LOADING_STATE = 'CHANGE_MAP_LOADING_STATE';

export const mapStateReducer = (
  state: boolean = true,
  action: MapStateActions
): boolean => {
  switch (action.type) {
    case EMapStateActions.CHANGE_MAP_LOADING_STATE: {
      return action.payload;
    }

    default:
      return state;
  }
};
