import { IconCircleExclamationMarkComponent } from './../components/icons/icon-circle-exclamation-mark/icon-circle-exclamation-mark.component';
import { LoadingSpinnerComponent } from './../components/loading-spinner/loading-spinner.component';
import { IconNoDataComponent } from './../components/icons/icon-no-data/icon-no-data.component';
import { NoDataComponent } from './../components/no-data/no-data.component';
import { TableSkeletonComponent } from '../components/table-skeleton/table-skeleton.component';
import { LanguageListComponent } from './../components/language-list/language-list.component';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ButtonComponent } from '../components/button/button.component';
import { CheckboxComponent } from '../components/checkbox/checkbox.component';
import { DirectionItemComponent } from '../components/direction-item/direction-item.component';
import { DirectionListComponent } from '../components/direction-list/direction-list.component';
import { DistanceItemComponent } from '../components/distance-item/distance-item.component';
import { FiltersComponent } from '../components/filters/filters.component';
import { IconClusterComponent } from '../components/icons/icon-cluster/icon-cluster.component';
import { IconCloseComponent } from '../components/icons/icon-close/icon-close.component';

import { IconDirectionComponent } from '../components/icons/icon-direction/icon-direction.component';
import { IconExpandMoreComponent } from '../components/icons/icon-expand-more/icon-expand-more.component';
import { IconGlobeComponent } from '../components/icons/icon-globe/icon-globe.component';
import { IconLocalPhoneComponent } from '../components/icons/icon-local-phone/icon-local-phone.component';
import { IconSearchComponent } from '../components/icons/icon-search/icon-search.component';
import { MapComponent } from '../components/map/map.component';
import { SearchbarComponent } from '../components/searchbar/searchbar.component';
import { SelectFilterItemComponent } from '../components/select-filter-item/select-filter-item.component';
import { SelectFilterComponent } from '../components/select-filter/select-filter.component';
import { DoctorDetailModalComponent } from '../components/modals/doctor-detail-modal/doctor-detail-modal.component';
import { HeaderTextSectionComponent } from '../components/header-text-section/header-text-section.component';
import { OfficeHoursComponent } from '../components/office-hours/office-hours.component';
import { appReducers } from 'src/app/store/reducers/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { IconDirectionActiveComponent } from '../components/icons/icon-direction-active/icon-direction-active.component';
import { DoctorLocationSlider } from '../components/doctor-location-slider/doctor-location-slider.component';
import { IconShowFiltersComponent } from '../components/icons/icon-show-filters/icon-show-filters.component';
import { LeftFilterSectionComponent } from '../components/left-filter-section/left-filter-section.component';
import { IconShowFiltersWhiteComponent } from '../components/icons/icon-show-filters-white/icon-show-filters-white.component';
import { IconMailComponent } from '../components/icons/icon-mail/icon-mail.component';
import { ActivityAreaListComponent } from '../components/areas-of-activity-list/activity-area-list.component';
import { AccessibilityListComponent } from '../components/accessibility-list/accessibility-list.component';
import { ScrollTrackerDirective } from '../directives/scroll-tracker.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
  ],
  declarations: [
    IconSearchComponent,
    IconClusterComponent,
    IconDirectionComponent,
    IconDirectionActiveComponent,
    IconExpandMoreComponent,
    IconLocalPhoneComponent,
    IconCloseComponent,
    IconGlobeComponent,
    IconMailComponent,
    IconNoDataComponent,
    IconCircleExclamationMarkComponent,

    ScrollTrackerDirective,

    LoadingSpinnerComponent,
    ButtonComponent,
    SearchbarComponent,
    DirectionListComponent,
    DirectionItemComponent,
    DistanceItemComponent,
    CheckboxComponent,
    SelectFilterComponent,
    FiltersComponent,
    SelectFilterItemComponent,
    MapComponent,
    DoctorDetailModalComponent,
    HeaderTextSectionComponent,
    OfficeHoursComponent,
    DoctorLocationSlider,
    IconShowFiltersComponent,
    LeftFilterSectionComponent,
    IconShowFiltersWhiteComponent,
    LanguageListComponent,
    ActivityAreaListComponent,
    AccessibilityListComponent,
    TableSkeletonComponent,
    NoDataComponent,
  ],
  exports: [
    IconSearchComponent,
    IconClusterComponent,
    IconDirectionComponent,
    IconExpandMoreComponent,
    IconLocalPhoneComponent,
    IconCloseComponent,
    IconGlobeComponent,
    IconMailComponent,
    IconNoDataComponent,
    IconCircleExclamationMarkComponent,

    LoadingSpinnerComponent,
    ButtonComponent,
    SearchbarComponent,
    DirectionListComponent,
    DirectionItemComponent,
    DistanceItemComponent,
    CheckboxComponent,
    SelectFilterComponent,
    FiltersComponent,
    SelectFilterItemComponent,
    MapComponent,
    DoctorDetailModalComponent,
    HeaderTextSectionComponent,
    OfficeHoursComponent,
    DoctorLocationSlider,
    IconShowFiltersComponent,
    LeftFilterSectionComponent,
    IconShowFiltersWhiteComponent,
    LanguageListComponent,
    ActivityAreaListComponent,
    AccessibilityListComponent,
    TableSkeletonComponent,
    NoDataComponent,
  ],
})
export class SharedModule {}
