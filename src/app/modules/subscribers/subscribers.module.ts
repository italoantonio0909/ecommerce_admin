import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscribersRoutingModule } from './subscribers-routing.module';
import { SubscriberListComponent } from './components/subscriber-list/subscriber-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule, ProgressModule, GridModule, CardModule, BadgeModule, PaginationModule, DropdownModule, ButtonModule, TooltipModule, FormModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { SubscriberCreateComponent } from './components/subscriber-create/subscriber-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

const components = [SubscriberListComponent, SubscriberCreateComponent]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    HttpClientModule,
    FormModule,
    SharedModule,
    ReactiveFormsModule,
    DropdownModule,
    PaginationModule,
    TooltipModule,
    ProgressModule,
    CardModule,
    ButtonModule,
    BadgeModule,
    IconModule,
    GridModule,
    TableModule,
    SubscribersRoutingModule
  ],
  exports: [components]
})
export class SubscribersModule { }
