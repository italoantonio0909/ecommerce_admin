import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardModule, GridModule, ProgressModule } from '@coreui/angular';
import { ChartsModule } from '../../views/charts/charts.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ProgressModule,
    ChartsModule,
    CardModule,
    GridModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
