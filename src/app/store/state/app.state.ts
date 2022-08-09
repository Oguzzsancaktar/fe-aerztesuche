import { IDoctorDetailModalState } from 'src/app/core/models';

import { initialDoctorDetailModalState } from './doctor-detail-modal.state';

export interface IAppState {
  doctorDetailModalState: IDoctorDetailModalState;
}

export const initialAppState: IAppState = {
  doctorDetailModalState: initialDoctorDetailModalState,
};

export function getAppInitialState(): IAppState {
  return initialAppState;
}
