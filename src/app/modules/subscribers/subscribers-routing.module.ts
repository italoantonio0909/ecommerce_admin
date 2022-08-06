import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriberListComponent } from './components/subscriber-list/subscriber-list.component';
import { SubscriberCreateComponent } from './components/subscriber-create/subscriber-create.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'subscribers',
        pathMatch: 'full'
      },
      {
        path: 'subscribers',
        component: SubscriberListComponent,
      },
      {
        path: 'subscribers-create',
        component: SubscriberCreateComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscribersRoutingModule { }
