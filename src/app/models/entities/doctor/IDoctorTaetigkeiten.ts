import IDoctorTaetigkeitAnLeistungsorten from './IDoctorTaetigkeitAnLeistungsorten';
import IDoctorTaetigkeitsBereiche from './IDoctorTaetigkeitsBereiche';

export default interface ITaetigkeiten {
  taetigkeitTyp: number;
  taetigkeitId: number;
  taetigkeitAnLeistungsorten: IDoctorTaetigkeitAnLeistungsorten[];
  hausfacharztKennzeichen: string;
  ermaechtigungsUmfang: [];
  taetigkeitsBereiche: IDoctorTaetigkeitsBereiche[];
  leistungsSpektrumen: [];
  genehmigungZuTaetigkeit: [];
}
