import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IDoctorFremdsprachen } from '../../models';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.scss'],
})
export class LanguageListComponent implements OnInit {
  @Input() languages?: IDoctorFremdsprachen[] = [];

  constructor() {}

  ngOnInit(): void {}
}
