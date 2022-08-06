import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardModule, GridModule, ProgressModule, WidgetModule, DropdownModule } from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { IconModule } from '@coreui/icons-angular';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ProgressModule,
    DropdownModule,
    WidgetModule,
    IconModule,
    ChartjsModule,
    CardModule,
    GridModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
