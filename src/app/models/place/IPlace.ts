import {
  IDoctorEmail,
  IDoctorFax,
  IDoctorPlace,
  IDoctorTelefon,
  IDoctorWebsite,
} from '..';

export default interface IPlace {
  id: number;
  title: string;
  strasse: string;
  plz: string;
  ort: string;
  distance: number;
  bereiche: [string];
  phone: IDoctorTelefon[];
  homePage: IDoctorWebsite[];
  email: IDoctorEmail[];
  fax: IDoctorFax[];
  geschlectTitle: string;
  zwischentitel: string;
  vortitel: string;
  vorname: string;
  nachname: string;
  place: IDoctorPlace;
  geschlect: number;
}
