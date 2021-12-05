import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrlistPageRoutingModule } from './crlist-routing.module';

import { CrlistPage } from './crlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrlistPageRoutingModule
  ],
  declarations: [CrlistPage]
})
export class CrlistPageModule {}
