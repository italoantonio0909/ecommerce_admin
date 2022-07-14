import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscribersRoutingModule } from './subscribers-routing.module';
import { SubscriberListComponent } from './subscriber-list/subscriber-list.component';


@NgModule({
  declarations: [
    SubscriberListComponent
  ],
  imports: [
    CommonModule,
    SubscribersRoutingModule
  ]
})
export class SubscribersModule { }
