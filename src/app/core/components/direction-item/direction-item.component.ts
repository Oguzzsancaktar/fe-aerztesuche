import { Component, Input, OnInit } from '@angular/core';
import IDirection from '../../models/IDirection';

@Component({
  selector: 'app-direction-item',
  templateUrl: './direction-item.component.html',
  styleUrls: ['./direction-item.component.scss'],
})
export class DirectionItemComponent implements OnInit {
  @Input() direction!: IDirection;

  constructor() {}

  ngOnInit(): void {}
}
