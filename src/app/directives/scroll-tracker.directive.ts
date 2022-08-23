import {
  Directive,
  Output,
  EventEmitter,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[scrollTracker]',
})
export class ScrollTrackerDirective {
  @Output() scrollingFinished = new EventEmitter<number>();
  @Input() pageNumber: number = 1;

  @HostListener('scroll', ['$event'])
  onScroll(event: any): void {
    if (event.target.offsetHeight * this.pageNumber < event.target.scrollTop) {
      console.log(this.pageNumber);
      this.scrollingFinished.emit();
    }
  }
}
