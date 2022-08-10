import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  @Input() showFilterSection?: boolean;
  @Output() handleFilterSectionEmitter = new EventEmitter<boolean>();

  constructor() {}

  handleFilterIconClick() {
    this.handleFilterSectionEmitter.emit(!this.showFilterSection);
  }

  ngOnInit(): void {}
}
