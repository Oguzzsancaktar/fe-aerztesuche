import {
  ChangeMapLoadingState,
  ChangeMapWillLoadState,
} from './../../store/actions/map-state.actions';
import { IAppState } from './../../store/state/app.state';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as L from 'leaflet';
import { MarkerService } from '../../services/marker.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
  IFilter,
  IPlace,
  IPlaceApiResult,
  ISearchPlaceQuery,
} from 'src/app/models';
import { selectPlaceQueryParamsState } from 'src/app/store/selectors/place-query-params.selectors';
import { initialPlaceQueryParamsState } from 'src/app/store/state/place-query-params.state';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  public map!: L.Map;
  showFilterSection: boolean = false;

  filterList: IFilter[] = [];
  placeList: IPlace[] = [];
  totalPlaceCount: number = 0;
  isPlacesLoading: boolean = true;
  pageNumber: number = 1;
  searchQueryParamsClone: ISearchPlaceQuery = initialPlaceQueryParamsState;

  scrollAreaElement: ElementRef<HTMLInputElement> | undefined;

  searchQueryParams$: Observable<ISearchPlaceQuery> = this._store.pipe(
    select(selectPlaceQueryParamsState)
  );

  constructor(
    private _store: Store<IAppState>,
    private markerService: MarkerService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private http: HttpClient
  ) {
    this.searchQueryParams$.subscribe((queryParams) => {
      if (this.scrollAreaElement?.nativeElement?.scrollTop) {
        this.scrollAreaElement.nativeElement.scrollTop = 0;
      }
      this.filterList = [];
      this.placeList = [];
      this.pageNumber = 1;
      this.isPlacesLoading = true;
      this.searchQueryParamsClone = queryParams;
      this.onScrollingFinished();
    });
  }

  onScrollingFinished(scrollElementRef?: ElementRef<HTMLInputElement>) {
    const url = `${environment.baseUrl}/places`;

    this.scrollAreaElement = scrollElementRef;
    this.isPlacesLoading = true;
    this.pageNumber++;

    this.http
      .post<IPlaceApiResult>(url, {
        ...this.searchQueryParamsClone,
        page: this.pageNumber,
      })
      .subscribe((data) => {
        this.filterList = data.filterList;
        this.placeList = this.placeList.concat(data.personList);
        this.totalPlaceCount = data.totalCount;
        this.isPlacesLoading = false;
      });
  }

  private initMap(): void {
    this.map = L.map('map', {
      attributionControl: false,
      center: [50.935173, 6.953101],
      zoom: 10,
    });

    const googleStreets = L.tileLayer(
      'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
      {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      }
    );

    googleStreets.addTo(this.map);
  }

  handleFilterSection(show: boolean) {
    this.showFilterSection = show;
  }

  ngAfterViewInit(): void {
    const isMapWillLoad = this.router.url.includes('consent=true');
    if (isMapWillLoad) {
      this.map?.remove();
      this.initMap();
      this.markerService.makeCapitalMarkers(this.map);
      this.map.zoomControl.setPosition('bottomright');
      L.control.scale({ position: 'bottomright' }).addTo(this.map);
      this.cdr.detectChanges();
      this._store.dispatch(new ChangeMapWillLoadState(true));
    } else {
      this._store.dispatch(new ChangeMapLoadingState(false));
      this._store.dispatch(new ChangeMapWillLoadState(false));
    }
  }
}
