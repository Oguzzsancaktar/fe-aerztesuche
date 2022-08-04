import IDirection from './IDirection';

export default interface IDoctorDetail {
  id: number;
  geometry: {
    type: string;
    coordinates: number[];
  };
  properties: IDirection;
}
