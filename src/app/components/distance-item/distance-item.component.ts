import { IPlace } from 'src/app/models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-distance-item',
  templateUrl: './distance-item.component.html',
  styleUrls: ['./distance-item.component.scss'],
})
export class DistanceItemComponent implements OnInit {
  @Input() distance!: string;
  @Input() isActive: boolean = false;
  @Input() coordinates!: IPlace['place'];

  constructor() {}

  ngOnInit(): void {}

  openLocationOnGoogleMaps(lat: number, lon: number) {
    window.open(`https://maps.google.com/?q=${lat},${lon}`, '_blank');
  }
}
