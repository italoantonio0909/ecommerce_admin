import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CategoryListComponent } from './category/components/category-list/category-list.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule, PaginationModule, ProgressModule, CardModule, BadgeModule, GridModule, TableModule, FormModule, ButtonModule, TooltipModule } from '@coreui/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';
import { CategoryCreateComponent } from './category/components/category-create/category-create.component';
import { SharedModule } from '../shared/shared.module';

const components = [
  CategoryListComponent,
  ProductListComponent,
  CategoryCreateComponent
]

@NgModule({
  declarations: [
    components,
  ],
  imports: [
    CommonModule,
    FormModule,
    ReactiveFormsModule,
    HttpClientModule,
    IconModule,
    ButtonModule,
    SharedModule,
    TooltipModule,
    DropdownModule,
    PaginationModule,
    ProgressModule,
    CardModule,
    BadgeModule,
    GridModule,
    TableModule,
    CatalogueRoutingModule
  ],
  exports: [components]
})
export class CatalogueModule { }
