import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscribersRoutingModule } from './subscribers-routing.module';
import { SubscriberListComponent } from './components/subscriber-list/subscriber-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule, ProgressModule, GridModule, CardModule, BadgeModule, PaginationModule, DropdownModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

const components = [SubscriberListComponent]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    HttpClientModule,
    DropdownModule,
    PaginationModule,
    ProgressModule,
    CardModule,
    BadgeModule,
    IconModule,
    GridModule,
    TableModule,
    SubscribersRoutingModule
  ],
  exports: [components]
})
export class SubscribersModule { }
