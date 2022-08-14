import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerPaginateComponent } from './partner-paginate/partner-paginate.component';
import { PartnerCreateComponent } from './partner-create/partner-create.component';



@NgModule({
  declarations: [
    PartnerPaginateComponent,
    PartnerCreateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PartnerModule { }
