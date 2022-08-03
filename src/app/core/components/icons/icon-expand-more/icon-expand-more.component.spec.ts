import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconExpandMoreComponent } from './icon-expand-more.component';

describe('IconExpandMoreComponent', () => {
  let component: IconExpandMoreComponent;
  let fixture: ComponentFixture<IconExpandMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconExpandMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconExpandMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
