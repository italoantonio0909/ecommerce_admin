import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerCreateComponent } from './components/customer-create/customer-create.component';
import { CustomerPaginateComponent } from './components/customer-paginate/customer-paginate.component';

const components = [
  CustomerCreateComponent,
  CustomerPaginateComponent
]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  exports: [components]
})
export class CustomersModule { }
