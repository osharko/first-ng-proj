import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Esercizio2ServiceModule } from '../esercizio2-service.module';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';

@Injectable({ providedIn: Esercizio2ServiceModule })
export class DomandeResolver implements Resolve<boolean> {

  constructor(
    private apiService: ApiService,
    private dataService: DataService,
  ) { }

  resolve(): Observable<boolean> {
    this.dataService.reset();
    this.dataService.domandeSicurezza = this.apiService.getDomande();
    return of(true);
  }
}
