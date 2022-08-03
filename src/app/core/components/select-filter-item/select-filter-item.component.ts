import { Component, OnInit, Input } from '@angular/core';
import IOption from '../../models/IOption';

@Component({
  selector: 'app-select-filter-item',
  templateUrl: './select-filter-item.component.html',
  styleUrls: ['./select-filter-item.component.scss'],
})
export class SelectFilterItemComponent implements OnInit {
  @Input() option!: IOption;
  constructor() {}

  ngOnInit(): void {}
}
