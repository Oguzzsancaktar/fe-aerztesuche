import { IFilter } from './filter';
import { IPlace } from './place';

export default interface IPlaceApiResult {
  personList: IPlace[];
  filterList: IFilter[];
}
