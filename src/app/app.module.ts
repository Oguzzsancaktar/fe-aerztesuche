import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MarkerService } from './marker.service';

import { AppComponent } from './app.component';
import { ButtonComponent } from './core/components/button/button.component';
import { SearchbarComponent } from './core/components/searchbar/searchbar.component';
import { IconSearchComponent } from './core/components/icons/icon-search/icon-search.component';
import { IconClusterComponent } from './core/components/icons/icon-cluster/icon-cluster.component';
import { IconDirectionComponent } from './core/components/icons/icon-direction/icon-direction.component';
import { DirectionListComponent } from './core/components/direction-list/direction-list.component';
import { DirectionItemComponent } from './core/components/direction-item/direction-item.component';
import { DistanceItemComponent } from './core/components/distance-item/distance-item.component';
import { CheckboxComponent } from './core/components/checkbox/checkbox.component';
import { SelectFilterComponent } from './core/components/select-filter/select-filter.component';
import { FiltersComponent } from './core/components/filters/filters.component';
import { SelectFilterItemComponent } from './core/components/select-filter-item/select-filter-item.component';
import { IconExpandMoreComponent } from './core/components/icons/icon-expand-more/icon-expand-more.component';
import { IconLocalPhoneComponent } from './core/components/icons/icon-local-phone/icon-local-phone.component';
import { IconGlobeComponent } from './core/components/icons/icon-globe/icon-globe.component';
import { MapComponent } from './core/components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
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
  imports: [BrowserModule, HttpClientModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
