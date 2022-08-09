import ITitleContentInformation from '../ITitleContentInformation';
import IDoctorLocation from './IDoctorLocation';
import IWorkingHours from './IDoctorWorkingHours';

export default interface IDoctorDirection {
  name: string;
  speciality: string;
  phone: string;
  website: string;
  locations: IDoctorLocation[];
}
