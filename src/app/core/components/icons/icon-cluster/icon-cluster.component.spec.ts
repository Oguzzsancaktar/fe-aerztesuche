import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconClusterComponent } from './icon-cluster.component';

describe('IconClusterComponent', () => {
  let component: IconClusterComponent;
  let fixture: ComponentFixture<IconClusterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconClusterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
