import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccessibilityListComponent } from './accessibility-list.component';

describe('AccessibilityListComponent', () => {
  let component: AccessibilityListComponent;
  let fixture: ComponentFixture<AccessibilityListComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessibilityListComponent],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(AccessibilityListComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create the "AccessibilityListComponent"', () => {
    expect(component).toBeTruthy();
  });

  it('should create the "accessibilityList"', () => {
    expect(component.accessibilityList).toBeTruthy();
  });
});
