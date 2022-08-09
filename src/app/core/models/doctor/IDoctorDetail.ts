import IDoctorDirection from './IDoctorDirection';

export default interface IDoctorDetail {
  id: number;
  geometry: {
    type: string;
    coordinates: number[];
  };
  properties: IDoctorDirection;
}
