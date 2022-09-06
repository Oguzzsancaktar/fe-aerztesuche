import { ButtonComponent } from './button.component';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create the "ButtonComponent"', () => {
    expect(component).toBeTruthy();
  });

  it('should control "backgroundColor" props', () => {
    expect(component.backgroundColor).toBeTruthy();
  });

  it('should control "border" props', () => {
    expect(component.border).toBeTruthy();
  });

  it('should control "cursorType" props', () => {
    expect(component.cursorType).toBeTruthy();
  });

  it('should control "text" props', () => {
    expect(component.text).toBeTruthy();
  });

  it('should control "textColor" props', () => {
    expect(component.textColor).toBeTruthy();
  });

  it('should control button click', () => {
    spyOn(component.btnClick, 'emit');

    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();
    expect(component.btnClick.emit).toHaveBeenCalledWith();
  });
});
