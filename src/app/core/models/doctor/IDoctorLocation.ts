import ITitleContentInformation from '../ITitleContentInformation';
import IDoctorWorkingHours from './IDoctorWorkingHours';

export default interface IDoctorLocation {
  address: string;
  distance: string;
  informations: ITitleContentInformation[];
  workingHours: IDoctorWorkingHours[];
}
