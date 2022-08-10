import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-filter-section',
  templateUrl: './left-filter-section.component.html',
  styleUrls: ['./left-filter-section.component.scss'],
})
export class LeftFilterSectionComponent implements OnInit {
  @Input() showFilterSection?: boolean;
  @Output() handleFilterSectionEmitter = new EventEmitter<boolean>();

  tempFilterData = [
    {
      name: 'Fachgebiet',
      values: [
        {
          label: 'Above',
          value: 'above',
        },
        {
          label: 'Below',
          value: 'below',
        },
      ],
    },
    {
      name: 'Barrierefreiheit',
      values: [
        {
          label: 'Stufenloser Zugang (3)',
          value: 'zugang',
        },
        {
          label: 'Aufzug',
          value: 'aufzug',
        },
        {
          label: 'Rampe',
          value: 'rampe',
        },
      ],
    },
    {
      name: 'Zusatzbezeichnung',
      values: [
        {
          label: 'Above',
          value: 'above',
        },
        {
          label: 'Below',
          value: 'below',
        },
      ],
    },
    {
      name: 'Sonderleistung',
      values: [
        {
          label: 'Above',
          value: 'above',
        },
        {
          label: 'Below',
          value: 'below',
        },
      ],
    },
    {
      name: 'Sprachen',
      values: [
        {
          label: 'Above',
          value: 'above',
        },
        {
          label: 'Below',
          value: 'below',
        },
      ],
    },
    {
      name: 'Öffnungszeiten',
      values: [
        {
          label: 'Above',
          value: 'above',
        },
        {
          label: 'Below',
          value: 'below',
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
