import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CategoryListComponent } from './category/components/category-list/category-list.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule, PaginationModule, ProgressModule, CardModule, BadgeModule, GridModule, TableModule } from '@coreui/angular';

const components = [
  CategoryListComponent,
  ProductListComponent
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    HttpClientModule,
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
