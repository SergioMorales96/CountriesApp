import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './pages/country/country.component';
import { RegionComponent } from './pages/region/region.component';
import { CapitalComponent } from './pages/capital/capital.component';
import { ViewCountryComponent } from './pages/view-country/view-country.component';
import { CountryInputComponent } from './components/country-input/country-input.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CountryComponent,
    RegionComponent,
    CapitalComponent,
    ViewCountryComponent,
    CountryInputComponent,
    CountryTableComponent
  ],
  exports: [
    CountryComponent,
    RegionComponent,
    CapitalComponent,
    ViewCountryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CountryModule { }
