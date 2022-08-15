import { Injectable } from '@angular/core';
import EGender from '../../models/Enumeration/EGender';

@Injectable()
export class GenderUtil {
  findGenderAdditional(gender: number) {
    console.log(gender);
  }
}
