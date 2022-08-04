import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DoctorDetailModalService } from '../../services/doctor-detail-modal.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, SharedModule],
  providers: [DoctorDetailModalService],
})
export class HomeModule {}
