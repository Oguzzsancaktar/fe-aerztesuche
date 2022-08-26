import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-text-section',
  templateUrl: './header-text-section.component.html',
  styleUrls: ['./header-text-section.component.scss'],
})
export class HeaderTextSectionComponent {
  @Input() headerText: string = '';
  @Input() contentDescription: string = '';
}
