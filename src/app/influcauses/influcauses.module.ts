import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InflucausesPageRoutingModule } from './influcauses-routing.module';

import { InflucausesPage } from './influcauses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InflucausesPageRoutingModule
  ],
  declarations: [InflucausesPage]
})
export class InflucausesPageModule {}
