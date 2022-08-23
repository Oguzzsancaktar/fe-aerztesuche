import { PlaceService } from './../../services/place.service';
import { MarkerService } from '../../services/marker.service';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DoctorDetailModalService } from '../../services/doctor-detail-modal.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, SharedModule, CommonModule],
  providers: [DoctorDetailModalService, MarkerService, PlaceService],
})
export class HomeModule {}
