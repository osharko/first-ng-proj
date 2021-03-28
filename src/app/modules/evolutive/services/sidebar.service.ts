import { Injectable } from '@angular/core';
import { CustomBehaviorSubject } from 'src/app/model/CustomBehaviorSubject';
import { EvolutiveServicesModule } from '../evolutive-services.module';

@Injectable({ providedIn: EvolutiveServicesModule })
export class SidebarService {
    public toggle: CustomBehaviorSubject<boolean> = new CustomBehaviorSubject<boolean>(false);
}
