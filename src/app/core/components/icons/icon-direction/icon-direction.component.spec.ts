import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDirectionComponent } from './icon-direction.component';

describe('IconDirectionComponent', () => {
  let component: IconDirectionComponent;
  let fixture: ComponentFixture<IconDirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconDirectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
