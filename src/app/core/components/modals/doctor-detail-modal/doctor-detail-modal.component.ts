import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IDirection from 'src/app/core/models/IDirection';
import { Observable, startWith } from 'rxjs';
import { DoctorDetailModalService } from 'src/app/core/services/doctor-detail-modal.service';
import IDoctorDetail from 'src/app/core/models/IDoctorDetail';

@Component({
  selector: 'app-doctor-detail-modal',
  templateUrl: './doctor-detail-modal.component.html',
  styleUrls: ['./doctor-detail-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoctorDetailModalComponent implements OnInit {
  public subscription_doctor_detail$: Observable<IDoctorDetail>;
  public isDoctorDetailModalOpen$: Observable<boolean>;

  constructor(private _doctorDetailModalService: DoctorDetailModalService) {
    this.subscription_doctor_detail$ =
      this._doctorDetailModalService.selectedDoctor.pipe();

    this.isDoctorDetailModalOpen$ =
      this._doctorDetailModalService.isDoctorDetailModalOpen.pipe(
        startWith(false)
      );
  }

  ngOnInit(): void {}

  close() {
    this._doctorDetailModalService.closeDoctorDetailModal();
  }
}
