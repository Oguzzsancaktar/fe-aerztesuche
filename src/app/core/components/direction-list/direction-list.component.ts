import { Component, Input, OnInit } from '@angular/core';
import { IPlace } from '../../models';
import { PlaceService } from '../../services/place.service';

@Component({
  selector: 'app-direction-list',
  templateUrl: './direction-list.component.html',
  styleUrls: ['./direction-list.component.scss'],
})
export class DirectionListComponent implements OnInit {
  @Input() map: any;
  public subscription_place_list$: IPlace[] = [];

  constructor(private _placeService: PlaceService) {
    this._placeService.getPlaceList().subscribe((item) => {
      this.subscription_place_list$ = item.body;
    });
  }

  ngOnInit(): void {}
}
