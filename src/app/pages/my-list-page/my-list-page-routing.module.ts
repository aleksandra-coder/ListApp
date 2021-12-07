import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyListPagePage } from './my-list-page.page';

const routes: Routes = [
  {
    path: '',
    component: MyListPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyListPagePageRoutingModule {}
