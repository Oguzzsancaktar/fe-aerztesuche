import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import IDirection from '../../models/IDirection';
import IDoctorDetail from '../../models/IDoctorDetail';
import { DoctorDetailModalService } from '../../services/doctor-detail-modal.service';

@Component({
  selector: 'app-direction-item',
  templateUrl: './direction-item.component.html',
  styleUrls: ['./direction-item.component.scss'],
})
export class DirectionItemComponent implements OnInit {
  @Input() doctor?: IDoctorDetail | null;
  @Output() openModalEvent = new EventEmitter<number>();

  constructor(private _doctorDetailModalService: DoctorDetailModalService) {
    console.log(this.doctor);
  }

  openDoctorDetailModal(id: number) {
    this._doctorDetailModalService.openDoctorDetailModal(id);
  }

  ngOnInit(): void {}
}
