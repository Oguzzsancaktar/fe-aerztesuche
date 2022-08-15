import IDoctorBarrierefreiheit from './IDoctorBarrierefreiheit';
import IDoctorEmail from './IDoctorEmail';
import IDoctorFax from './IDoctorFax';
import IDoctorPlace from './IDoctorPlace';
import IDoctorSprechzeiten from './IDoctorSprechzeiten';
import IDoctorTelefon from './IDoctorTelefon';
import IDoctorWebsite from './IDoctorWebsite';

export default interface IDoctorTaetigkeitAnLeistungsorten {
  leistungsortnummer: string;
  plz: string;
  ort: string;
  strasse: string;
  hausnummer: string;
  barrierefreiheit: IDoctorBarrierefreiheit[];
  telefon: IDoctorTelefon[];
  homePage: IDoctorWebsite[];
  email: IDoctorEmail[];
  fax: IDoctorFax[];
  sprechzeiten: IDoctorSprechzeiten[];
  place: IDoctorPlace;
}
