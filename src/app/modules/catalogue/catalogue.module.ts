import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CategoryListComponent } from './category/components/category-list/category-list.component';
import { ProductListComponent } from './product/product-list/product-list.component';

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
    CatalogueRoutingModule
  ],
  exports: [components]
})
export class CatalogueModule { }
