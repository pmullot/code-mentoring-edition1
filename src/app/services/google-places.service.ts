/// <reference types="google.maps" />

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GooglePlacesService {
  private placesService: google.maps.places.PlacesService;
  protected autocomplete: google.maps.places.AutocompleteService;

  public results$: BehaviorSubject<google.maps.places.PlaceResult[]> = new BehaviorSubject([]);

  constructor() {
    const script = this.asyncLoadLibrary(`https://maps.googleapis.com/maps/api/js?key=${environment.googleAPIKey}&libraries=places`);
    script.onload = () => {
      const div = document.createElement('div') as HTMLDivElement;
      this.placesService = new google.maps.places.PlacesService(div);
      this.autocomplete = new google.maps.places.AutocompleteService();
    };
  }

  public getPredictions(text: string): Promise<google.maps.places.PlaceResult[]> {
    return new Promise((res, rej) => {
      try {
        if (!text || text === '') {
          this.results$.next([]);
          res([]);
        } else {
          this.placesService.textSearch(
            {
              query: text,
            },
            (result, status) => {
              this.results$.next(result);
              res(result);
            }
          );
        }
      } catch (error) {
        console.log(error);
        rej(error);
      }
    });
  }

  protected asyncLoadLibrary(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    document.body.appendChild(script);
    return script;
  }
}
