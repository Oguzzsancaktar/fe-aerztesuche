import { initialDoctorDetailModalState } from '../state/doctor-detail-modal.state';
import { IDoctorDetailModalState } from 'src/app/core/models';

import {
  DoctorDetailModalActions,
  EDoctorDetailModalActions,
} from '../actions/doctor-detail-modal.actions';

export const OPEN_DOCTOR_DETAIL_MODAL = 'OPEN_DOCTOR_DETAIL_MODAL';

export const openDoctorDetailModalReducer = (
  state: IDoctorDetailModalState = initialDoctorDetailModalState,
  action: DoctorDetailModalActions
): IDoctorDetailModalState => {
  switch (action.type) {
    case EDoctorDetailModalActions.OPEN_DOCTOR_DETAIL_MODAL: {
      return {
        ...state,
        isModalOpen: true,
        selectedDoctorId: action.payload.selectedDoctorId,
        selectedDoctorPlace: action.payload.selectedDoctorPlace,
      };
    }
    case EDoctorDetailModalActions.CLOSE_DOCTOR_DETAIL_MODAL: {
      return {
        ...state,
        isModalOpen: false,
        selectedDoctorId: undefined,
        selectedDoctorPlace: undefined,
      };
    }
    default:
      return state;
  }
};
