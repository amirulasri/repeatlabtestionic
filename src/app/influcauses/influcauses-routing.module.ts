import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InflucausesPage } from './influcauses.page';

const routes: Routes = [
  {
    path: '',
    component: InflucausesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InflucausesPageRoutingModule {}
