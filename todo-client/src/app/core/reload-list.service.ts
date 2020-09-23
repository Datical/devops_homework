import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReloadListService {
  public reload$ = new BehaviorSubject<void>(undefined);

  constructor() { }

  public trigger() {
    this.reload$.next();
  }
}
