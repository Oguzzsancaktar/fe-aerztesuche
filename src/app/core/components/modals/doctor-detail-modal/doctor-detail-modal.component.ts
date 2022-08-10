import { CloseDoctorDetailModal } from './../../../../store/actions/doctor-detail-modal.actions';
import {
  selectDoctorDetailModalIsOpen,
  selectDoctorDetailModalDoctorId,
} from './../../../../store/selectors/doctor-detail-modal.selectors';
import { Store, select } from '@ngrx/store';
import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';
import { IDoctorDetail, IDoctorDetailModalState } from 'src/app/core/models';
import { IAppState } from 'src/app/store/state/app.state';
import { DoctorDetailModalService } from 'src/app/core/services/doctor-detail-modal.service';

@Component({
  selector: 'app-doctor-detail-modal',
  templateUrl: './doctor-detail-modal.component.html',
  styleUrls: ['./doctor-detail-modal.component.scss'],
})
export class DoctorDetailModalComponent implements OnInit {
  @Input() map: any;
  @ViewChild('doctorDetailModal') doctorDetailModal: ElementRef | undefined;

  _doctorDetail: IDoctorDetail | undefined;

  public isDoctorDetailModalOpen$: Observable<
    IDoctorDetailModalState['isModalOpen']
  >;

  public doctorDetailModalDoctorId$: Observable<
    IDoctorDetailModalState['selectedDoctorId']
  >;

  constructor(
    private _store: Store<IAppState>,
    private _doctorDetailModalService: DoctorDetailModalService,
    private renderer: Renderer2
  ) {
    this.isDoctorDetailModalOpen$ = this._store.pipe(
      select(selectDoctorDetailModalIsOpen)
    );

    this.doctorDetailModalDoctorId$ = this._store.pipe(
      select(selectDoctorDetailModalDoctorId)
    );
  }

  ngOnInit(): void {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target === this.doctorDetailModal?.nativeElement) {
        this.close();
      }
    });

    this.doctorDetailModalDoctorId$.subscribe((doctorId) => {
      if (doctorId) {
        this._doctorDetail =
          // TODO
          //@ts-ignore
          this._doctorDetailModalService
            .getDoctorDetail(doctorId)
            //@ts-ignore
            .find((doctor) => doctor.id === doctorId);
      }
    });
  }

  close() {
    this._doctorDetailModalService.closeDoctorDetailModal(this.map);
  }
}
