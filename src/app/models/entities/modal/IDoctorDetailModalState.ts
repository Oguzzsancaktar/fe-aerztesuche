import { IDoctorDetail, IPlace } from 'src/app/models';

export default interface IDoctorDetailModalState {
  isModalOpen: boolean;
  selectedDoctorId?: IDoctorDetail['personId'];
  selectedDoctorPlace?: IPlace[];
}
