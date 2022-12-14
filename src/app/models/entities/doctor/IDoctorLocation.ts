import ITitleContentInformation from '../general/ITitleContentInformation';
import IDoctorWorkingHours from './IDoctorWorkingHours';

export default interface IDoctorLocation {
  address: string;
  distance: string;
  informations: ITitleContentInformation[];
  workingHours: IDoctorWorkingHours[];
  openWorkingHours: IDoctorWorkingHours[];
}
