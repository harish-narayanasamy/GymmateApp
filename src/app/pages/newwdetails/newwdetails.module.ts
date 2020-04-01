import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewwdetailsPageRoutingModule } from './newwdetails-routing.module';

import { NewwdetailsPage } from './newwdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewwdetailsPageRoutingModule
  ],
  declarations: [NewwdetailsPage]
})
export class NewwdetailsPageModule {}
