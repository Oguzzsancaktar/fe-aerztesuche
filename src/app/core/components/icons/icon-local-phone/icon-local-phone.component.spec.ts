import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconLocalPhoneComponent } from './icon-local-phone.component';

describe('IconLocalPhoneComponent', () => {
  let component: IconLocalPhoneComponent;
  let fixture: ComponentFixture<IconLocalPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconLocalPhoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconLocalPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
