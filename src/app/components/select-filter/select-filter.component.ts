import { Component, Input } from '@angular/core';
import IOption from '../../models/entities/general/IOption';

@Component({
  selector: 'app-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.scss'],
})
export class SelectFilterComponent {
  @Input() filterOptions!: IOption[];
}
