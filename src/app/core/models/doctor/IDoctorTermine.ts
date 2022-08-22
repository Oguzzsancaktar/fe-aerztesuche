import IDoctorTermineHours from './IDoctorTermineHours';

export default interface IDoctorTermine {
  tag: number;
  hours: IDoctorTermineHours[];
}
