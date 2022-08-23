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

  @HostListener('scroll', ['$event'])
  onScroll(event: any): void {
    if (
      event.target.offsetHeight + event.target.scrollTop >=
      event.target.scrollHeight
    ) {
      this.scrollingFinished.emit();
    }
  }
}
