import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-close',
  templateUrl: './icon-close.component.svg',
  styleUrls: ['./icon-close.component.scss'],
})
export class IconCloseComponent implements OnInit {
  fillColor = 'rgb(255, 0, 0)';

  constructor() {}

  ngOnInit(): void {}

  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }
}
