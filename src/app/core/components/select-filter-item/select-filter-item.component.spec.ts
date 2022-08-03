import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFilterItemComponent } from './select-filter-item.component';

describe('SelectFilterItemComponent', () => {
  let component: SelectFilterItemComponent;
  let fixture: ComponentFixture<SelectFilterItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectFilterItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectFilterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
