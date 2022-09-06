import { HttpClient } from '@angular/common/http';
import { DoctorDetailModalService } from 'src/app/services/doctor-detail-modal.service';
import { MarkerService } from './../../services/marker.service';
import { appReducers } from 'src/app/store/reducers/app.reducers';
import { HomeComponent } from './home.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientTestingModule, StoreModule.forRoot(appReducers)],
      providers: [DoctorDetailModalService, MarkerService],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create the "HomeComponent"', () => {
    expect(component).toBeTruthy();
  });

  it('should handle filter section', () => {
    expect(component.showFilterSection).toBeFalsy();
    component.handleFilterSection(true);
    expect(component.showFilterSection).toBeTruthy();
    component.handleFilterSection(false);
    expect(component.showFilterSection).toBeFalsy();
  });
});
