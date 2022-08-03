import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-distance-item',
  templateUrl: './distance-item.component.html',
  styleUrls: ['./distance-item.component.scss'],
})
export class DistanceItemComponent implements OnInit {
  @Input() distance!: string;
  constructor() {}

  ngOnInit(): void {}
}
