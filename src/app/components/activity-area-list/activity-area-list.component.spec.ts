import { ActivityAreaListComponent } from './../areas-of-activity-list/activity-area-list.component';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ActivityAreaListComponent', () => {
  let component: ActivityAreaListComponent;
  let fixture: ComponentFixture<ActivityAreaListComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActivityAreaListComponent],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(ActivityAreaListComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create the "ActivityAreaListComponent"', () => {
    expect(component).toBeTruthy();
  });

  it('should create the "activityAreaList"', () => {
    expect(component.activityAreaList).toBeTruthy();
  });
});
