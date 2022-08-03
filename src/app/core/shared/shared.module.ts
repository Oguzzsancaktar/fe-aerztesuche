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
import { IconDirectionComponent } from '../components/icons/icon-direction/icon-direction.component';
import { IconExpandMoreComponent } from '../components/icons/icon-expand-more/icon-expand-more.component';
import { IconGlobeComponent } from '../components/icons/icon-globe/icon-globe.component';
import { IconLocalPhoneComponent } from '../components/icons/icon-local-phone/icon-local-phone.component';
import { IconSearchComponent } from '../components/icons/icon-search/icon-search.component';
import { MapComponent } from '../components/map/map.component';
import { SearchbarComponent } from '../components/searchbar/searchbar.component';
import { SelectFilterItemComponent } from '../components/select-filter-item/select-filter-item.component';
import { SelectFilterComponent } from '../components/select-filter/select-filter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  declarations: [
    ButtonComponent,
    SearchbarComponent,
    IconSearchComponent,
    IconClusterComponent,
    IconDirectionComponent,
    DirectionListComponent,
    DirectionItemComponent,
    DistanceItemComponent,
    CheckboxComponent,
    SelectFilterComponent,
    FiltersComponent,
    SelectFilterItemComponent,
    IconExpandMoreComponent,
    IconLocalPhoneComponent,
    IconGlobeComponent,
    MapComponent,
  ],
  exports: [
    ButtonComponent,
    SearchbarComponent,
    IconSearchComponent,
    IconClusterComponent,
    IconDirectionComponent,
    DirectionListComponent,
    DirectionItemComponent,
    DistanceItemComponent,
    CheckboxComponent,
    SelectFilterComponent,
    FiltersComponent,
    SelectFilterItemComponent,
    IconExpandMoreComponent,
    IconLocalPhoneComponent,
    IconGlobeComponent,
    MapComponent,
  ],
})
export class SharedModule {}
