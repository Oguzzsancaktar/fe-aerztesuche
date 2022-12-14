import { createSelector } from '@ngrx/store';
import { IDoctorDetailModalState } from 'src/app/models';
import { IAppState } from './../state/app.state';

const selectAppState = (state: IAppState) => state.doctorDetailModalState;

export const selectDoctorDetailModalState = createSelector(
  selectAppState,
  (state: IDoctorDetailModalState) => state
);

export const selectDoctorDetailModalIsOpen = createSelector(
  selectAppState,
  (state: IDoctorDetailModalState) => state.isModalOpen
);

export const selectDoctorDetailModalDoctorId = createSelector(
  selectAppState,
  (state: IDoctorDetailModalState) => state.selectedDoctorId
);

export const selectDoctorDetailModalPlace = createSelector(
  selectAppState,
  (state: IDoctorDetailModalState) => state.selectedDoctorPlace
);
