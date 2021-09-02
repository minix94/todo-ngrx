import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeThemeService {
    private presentThemeSubject = new BehaviorSubject('theme-light');

    presentTheme$: Observable<string> = this.presentThemeSubject.asObservable();
    constructor() {}

    changeTheme(theme:string) {
      this.presentThemeSubject.next(theme);
    }
  }

