import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
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

  toggleFilterSelects(index: number) {
    if (this.activeIndex !== index) {
      this.activeIndex = index;
    } else {
      this.activeIndex = null;
    }
  }
}
