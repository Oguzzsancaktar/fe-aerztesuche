import { IDoctorDetail } from 'src/app/core/models';

export default interface IDoctorDetailModalState {
  isModalOpen: boolean;
  selectedDoctorId?: IDoctorDetail['id'];
}
