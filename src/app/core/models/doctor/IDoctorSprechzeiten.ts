import IDoctorTermine from './IDoctorTermine';

export default interface IDoctorSprechzeiten {
  sprechzeitArt: number;
  vereinbarung1?: any;
  vereinbarung2?: any;
  vereinbarung3?: any;
  termine: IDoctorTermine[];
}
