import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTextSectionComponent } from './header-text-section.component';

describe('HeaderTextSectionComponent', () => {
  let component: HeaderTextSectionComponent;
  let fixture: ComponentFixture<HeaderTextSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTextSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderTextSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
