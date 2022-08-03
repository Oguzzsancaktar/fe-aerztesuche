import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direction-list',
  templateUrl: './direction-list.component.html',
  styleUrls: ['./direction-list.component.scss'],
})
export class DirectionListComponent implements OnInit {
  directions = [
    {
      name: 'Dr. Max Müller',
      address: 'Musterstraße 11 40237 Düsseldorf',
      speciality: 'Orthopäde',
      phone: '+49 211 12 3456',
      website: 'www.musterarzt.de',
      distance: '1,2 km',
    },
    {
      name: 'Dr. Peter Müller',
      address: 'Musterstraße 7 40237 Düsseldorf',
      speciality: 'Orthopäde',
      phone: '+49 211 12 3456',
      website: 'www.musterarzt.de',
      distance: '1,0 km',
    },
    {
      name: 'Dr. Reiner Müller',
      address: 'Musterstraße 3a 40237 Düsseldorf',
      speciality: 'Allgemein Mediziner',
      phone: '+49 211 12 3456',
      website: 'www.musterarzt.de',
      distance: '0,2 km',
    },
    {
      name: 'Dr. Amelie Müller',
      address: 'Musterstraße 9-10 40237 Düsseldorf',
      speciality: 'Hausarzt',
      phone: '+49 211 12 3456',
      website: 'www.musterarzt.de',
      distance: '1,1 km',
    },
    {
      name: 'Dr. Max Müller',
      address: 'Musterstraße 11 40237 Düsseldorf',
      speciality: 'Orthopäde',
      phone: '+49 211 12 3456',
      website: 'www.musterarzt.de',
      distance: '1,5 km',
    },
    {
      name: 'Dr. Peter Müller',
      address: 'Musterstraße 11 40237 Düsseldorf',
      speciality: 'Orthopäde',
      phone: '+49 211 12 3456',
      website: 'www.musterarzt.de',
      distance: '1,5 km',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
