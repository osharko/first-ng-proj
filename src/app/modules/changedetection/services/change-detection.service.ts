import { Injectable } from '@angular/core';
import { CustomBehaviorSubject } from 'src/app/model/CustomBehaviorSubject';
import { ChangeDetectionServiceModule } from '../change-detection-service.module';

@Injectable({ providedIn: ChangeDetectionServiceModule })
export class ChangeDetectionService {

  public noCDCounter: number = 0;
  public cdCounter: CustomBehaviorSubject<number> = new CustomBehaviorSubject(0);

  constructor() { }
}
