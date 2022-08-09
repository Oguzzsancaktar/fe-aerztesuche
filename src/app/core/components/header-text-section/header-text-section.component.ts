import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-text-section',
  templateUrl: './header-text-section.component.html',
  styleUrls: ['./header-text-section.component.scss'],
})
export class HeaderTextSectionComponent implements OnInit {
  @Input() headerText: string = '';
  @Input() headerContent: string = '';

  constructor() {}

  ngOnInit(): void {}
}
