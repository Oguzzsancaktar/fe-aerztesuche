import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text: string = 'botton!!!';
  @Input() backgroundColor: string = 'red';
  @Input() border: string = '1px solid transparent"';
  @Input() textColor: string = 'black';
  @Input() cursorType: string = 'pointer';

  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }
}
