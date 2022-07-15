import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscribersRoutingModule } from './subscribers-routing.module';
import { SubscriberListComponent } from './components/subscriber-list/subscriber-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule, ProgressModule, GridModule, CardModule, BadgeModule } from '@coreui/angular';

const components = [SubscriberListComponent]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    HttpClientModule,
    ProgressModule,
    CardModule,
    BadgeModule,
    GridModule,
    TableModule,
    SubscribersRoutingModule
  ],
  exports: [components]
})
export class SubscribersModule { }
