import IDoctorLocation from './IDoctorLocation';

export default interface IDoctorDirection {
  name: string;
  speciality: string;
  phone: string;
  website: string;
  locations: IDoctorLocation[];
}
