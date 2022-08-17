import { Observable } from 'rxjs';
import { EPendingStatus } from '../Enumeration/EPendingStatus';

export interface IPending<T> {
  data: Observable<T>;
  status: Observable<EPendingStatus>;
}
