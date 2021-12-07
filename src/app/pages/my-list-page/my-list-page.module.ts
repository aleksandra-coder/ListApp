import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyListPagePageRoutingModule } from './my-list-page-routing.module';

import { MyListPagePage } from './my-list-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyListPagePageRoutingModule
  ],
  declarations: [MyListPagePage]
})
export class MyListPagePageModule {}
