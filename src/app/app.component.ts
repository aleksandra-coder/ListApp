import { Component } from '@angular/core';
import { CrlistPage } from './pages/crlist/crlist.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  rootPage:any = CrlistPage;
  constructor() {}
}
