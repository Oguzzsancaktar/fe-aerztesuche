import { Component, Input, OnInit } from '@angular/core';
import IOption from '../../models/IOption';

@Component({
  selector: 'app-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.scss'],
})
export class SelectFilterComponent implements OnInit {
  @Input() filterOptions!: IOption[];

  constructor() {}

  ngOnInit(): void {}
}
