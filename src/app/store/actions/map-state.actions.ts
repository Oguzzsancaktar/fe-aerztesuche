import { Action } from '@ngrx/store';

export enum EMapStateActions {
  CHANGE_MAP_LOADING_STATE = 'CHANGE_MAP_LOADING_STATE',
  CHANGE_MAP_WILL_LOAD_STATE = 'CHANGE_MAP_WILL_LOAD_STATE',
}

export class ChangeMapLoadingState implements Action {
  public readonly type = EMapStateActions.CHANGE_MAP_LOADING_STATE;
  constructor(public payload: boolean) {}
}

export class ChangeMapWillLoadState implements Action {
  public readonly type = EMapStateActions.CHANGE_MAP_WILL_LOAD_STATE;
  constructor(public payload: boolean) {}
}

export type MapStateActions = ChangeMapLoadingState | ChangeMapWillLoadState;
