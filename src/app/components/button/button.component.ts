import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string = 'botton!!!';
  @Input() backgroundColor: string = 'red';
  @Input() border: string = '1px solid transparent"';
  @Input() textColor: string = 'black';
  @Input() cursorType: string = 'pointer';

  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }
}
