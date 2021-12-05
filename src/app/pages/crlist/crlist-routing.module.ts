import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrlistPage } from './crlist.page';

const routes: Routes = [
  {
    path: '',
    component: CrlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrlistPageRoutingModule {}
