import { Component, Input } from '@angular/core';
import IOption from '../../models/entities/general/IOption';

@Component({
  selector: 'app-select-filter-item',
  templateUrl: './select-filter-item.component.html',
  styleUrls: ['./select-filter-item.component.scss'],
})
export class SelectFilterItemComponent {
  @Input() option!: IOption;
}
