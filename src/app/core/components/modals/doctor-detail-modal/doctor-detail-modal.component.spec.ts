import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDetailModalComponent } from './doctor-detail-modal.component';

describe('DoctorDetailModalComponent', () => {
  let component: DoctorDetailModalComponent;
  let fixture: ComponentFixture<DoctorDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorDetailModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
