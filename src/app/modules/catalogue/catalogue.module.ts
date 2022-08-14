import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CategoryListComponent } from './category/components/category-list/category-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule, PaginationModule, ProgressModule, CardModule, BadgeModule, GridModule, TableModule, FormModule, ButtonModule, TooltipModule } from '@coreui/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';
import { CategoryCreateComponent } from './category/components/category-create/category-create.component';
import { SharedModule } from '../shared/shared.module';
import { ProductClassPaginateComponent } from './product-class/components/product-class-paginate/product-class-paginate.component';
import { ProductClassCreateComponent } from './product-class/components/product-class-create/product-class-create.component';
import { ProductCreateComponent } from './product/components/product-create/product-create.component';
import { ProductPaginateComponent } from './product/components/product-paginate/product-paginate.component';

const components = [
  CategoryListComponent,
  CategoryCreateComponent,
  ProductClassPaginateComponent,
  ProductClassCreateComponent,
  ProductCreateComponent,
  ProductPaginateComponent
]

@NgModule({
  declarations: [components],
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
