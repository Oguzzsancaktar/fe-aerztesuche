import { Injectable } from '@angular/core';
import EGender from '../models/enumeration/EGender';

@Injectable({
  providedIn: 'root',
})
export class GenderUtil {
  findGenderAdditional(gender: number) {
    return EGender[gender];
  }
}
