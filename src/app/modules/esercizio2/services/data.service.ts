import { Injectable } from '@angular/core';
import { Esercizio2ServiceModule } from '../esercizio2-service.module';
import { IDomanda, IDomandaSelezionata } from './api.service';

@Injectable({ providedIn: Esercizio2ServiceModule })
export class DataService {
  public domandeSicurezza: IDomanda[] = [];
  public domandeSelezionate: IDomandaSelezionata[] = Array<IDomandaSelezionata>(3);
  public indiceDomanda = 1;
  public domandaSelezionata?: IDomanda;
  public isRiepilogoReached: boolean = false;

  public reset() {
    this.domandeSicurezza = [];
    this.domandeSelezionate = Array<IDomandaSelezionata>(3);
    this.indiceDomanda = 1;
    this.domandaSelezionata = undefined;
    this.isRiepilogoReached = false;
  }
}
