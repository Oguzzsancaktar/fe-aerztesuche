import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceItemComponent } from './distance-item.component';

describe('DistanceItemComponent', () => {
  let component: DistanceItemComponent;
  let fixture: ComponentFixture<DistanceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistanceItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistanceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
