import { Observable } from 'rxjs';
import { EPendingStatus } from '../../enumeration';

export default interface IPending<T> {
  data: Observable<T>;
  status: Observable<EPendingStatus>;
}
