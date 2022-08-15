import IDoctorFremdsprachen from './IDoctorFremdsprachen';
import IDoctorTaetigkeiten from './IDoctorTaetigkeiten';

export default interface IDoctorDetail {
  id: string;
  personId: number;
  vortitel?: any;
  vorname: string;
  zwischentitel?: any;
  nachname: string;
  geschlecht: number;
  genehmigungZuPerson: [];
  akademischerTitel: {
    titelOrg: string;
  }[];
  taetigkeiten: IDoctorTaetigkeiten[];
  fremdsprachen: IDoctorFremdsprachen[];
}
