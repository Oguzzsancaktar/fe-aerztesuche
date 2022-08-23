import { IPlace } from 'src/app/models';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-direction-list',
  templateUrl: './direction-list.component.html',
  styleUrls: ['./direction-list.component.scss'],
})
export class DirectionListComponent {
  @Input() map: any;
  @Input() placeList: IPlace[] = [];
  @Input() totalPlaceCount: number = 0;
  @Input() isPlacesLoading: boolean = true;
  @Input() pageNumber: number = 1;

  @ViewChild('scrollArea') scrollArea!: ElementRef<HTMLInputElement>;

  @Output() handleOnScrollingFinished = new EventEmitter<
    ElementRef<HTMLInputElement>
  >();

  constructor() {}

  onScrollingFinished() {
    this.handleOnScrollingFinished.emit(this.scrollArea);
  }
}
