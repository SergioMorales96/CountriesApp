import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class RegionComponent {
  regions: string[] = ['africa', 'americas', 'europe', 'oceania', 'asia'];
  activeRegion: string = '';
  countries: Country[] = [];

  term: string = '';
  error: boolean = false;

  constructor(
    private countryService: CountryService
  ) { }

  getCssClass( region: string ): string {
    return region === this.activeRegion ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activateRegion( region: string ): void {
    if ( region === this.activeRegion ) { return; }

    this.activeRegion = region;

    // ...

    this.countryService.searchCountryByRegion( this.activeRegion)
      .subscribe(
        ( countries: Country[] ) => this.countries = countries
        , ( err ) => {
          this.error = true;
          this.countries = [];
        }
      );
  }

}