import { Subscription, Observable } from 'rxjs';
import { Component } from '@angular/core';
import { ChangeThemeService } from 'src/services/change-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todoAppNgrx';
  currentTheme$:Observable<string> = this.theme.presentTheme$;

  constructor(private theme:ChangeThemeService){

  }

}
