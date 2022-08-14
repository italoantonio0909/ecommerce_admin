import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerPaginateComponent } from './components/customer-paginate/customer-paginate.component';
import { CustomerCreateComponent } from './components/customer-create/customer-create.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'customers',
        component: CustomerPaginateComponent
      },
      {
        path: 'customers-create',
        component: CustomerCreateComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
