import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IFilter } from 'src/app/models';

@Component({
  selector: 'app-left-filter-section',
  templateUrl: './left-filter-section.component.html',
  styleUrls: ['./left-filter-section.component.scss'],
})
export class LeftFilterSectionComponent implements OnInit {
  @Input() filterList: IFilter[] = [];
  @Input() showFilterSection?: boolean;
  @Output() handleFilterSectionEmitter = new EventEmitter<boolean>();

  tempFilterData = [
    {
      name: 'Fachgebiet',
      values: [
        {
          label: 'Ortophädie',
          value: 'Ortophädie',
        },
        {
          label: 'Chirotherapie',
          value: 'Chirotherapie',
        },
        {
          label: 'Fachärtzlich tätig',
          value: 'Fachärtzlich tätig',
        },
      ],
    },
    {
      name: 'Barrierefreiheit',
      values: [
        {
          label: 'Stufenloser Zugang (3)',
          value: 'Stufenloser Zugang (3)',
        },
        {
          label: 'Aufzug (10)',
          value: 'Aufzug (10)',
        },
        {
          label: 'Rampe (1)',
          value: 'Rampe (1)',
        },
      ],
    },
    {
      name: 'Zusatzbezeichnung',
      values: [
        {
          label: 'Lorem Ipsum (3)',
          value: 'Lorem Ipsum (3)',
        },
        {
          label: 'Dolor Sit Amet',
          value: 'Dolor Sit Amet',
        },
      ],
    },
    {
      name: 'Sonderleistung',
      values: [
        {
          label: 'Test-Bezeichnung',
          value: 'Test-Bezeichnung',
        },
      ],
    },
    {
      name: 'Sprachen',
      values: [
        {
          label: 'Englisches',
          value: 'Englisches',
        },
        {
          label: 'German',
          value: 'German',
        },
      ],
    },
    {
      name: 'Öffnungszeiten',
      values: [
        {
          label: 'Mo-Fr: 8:00 - 17:00',
          value: 'Mo-Fr: 8:00 - 17:00',
        },
        {
          label: 'Sa: 8:00 - 12:00',
          value: 'Sa: 8:00 - 12:00',
        },
      ],
    },
  ];

  activeIndex: number | null = null;

  constructor() {}

  ngOnInit(): void {}

  handleCloseIconClick() {
    this.handleFilterSectionEmitter.emit(false);
  }

  toggleFilterSelects(index: number) {
    if (this.activeIndex !== index) {
      this.activeIndex = index;
    } else {
      this.activeIndex = null;
    }
  }
}
