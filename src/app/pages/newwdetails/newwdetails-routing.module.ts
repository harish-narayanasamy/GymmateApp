import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewwdetailsPage } from './newwdetails.page';

const routes: Routes = [
  {
    path: '',
    component: NewwdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewwdetailsPageRoutingModule {}
