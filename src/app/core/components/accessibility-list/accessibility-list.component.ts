import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IDoctorBarrierefreiheit, IDoctorFremdsprachen } from '../../models';

@Component({
  selector: 'app-accessibility-list',
  templateUrl: './accessibility-list.component.html',
  styleUrls: ['./accessibility-list.component.scss'],
})
export class AccessibilityListComponent implements OnInit {
  @Input() accessibilityList?: IDoctorBarrierefreiheit[] = [];

  constructor() {}

  ngOnInit(): void {}
}
