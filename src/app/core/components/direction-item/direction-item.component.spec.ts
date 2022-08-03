import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionItemComponent } from './direction-item.component';

describe('DirectionItemComponent', () => {
  let component: DirectionItemComponent;
  let fixture: ComponentFixture<DirectionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectionItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
