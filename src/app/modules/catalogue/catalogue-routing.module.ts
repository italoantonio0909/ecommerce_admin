import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category/components/category-list/category-list.component';
import { CategoryCreateComponent } from './category/components/category-create/category-create.component';
import { ProductClassPaginateComponent } from './product-class/components/product-class-paginate/product-class-paginate.component';
import { ProductClassCreateComponent } from './product-class/components/product-class-create/product-class-create.component';
import { ProductPaginateComponent } from './product/components/product-paginate/product-paginate.component';
import { ProductCreateComponent } from './product/components/product-create/product-create.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'category',
        component: CategoryListComponent
      },
      {
        path: 'category-create',
        component: CategoryCreateComponent
      },
      {
        path: 'product-class',
        component: ProductClassPaginateComponent
      },
      {
        path: 'product-class-create',
        component: ProductClassCreateComponent
      },
      {
        path: 'product',
        component: ProductPaginateComponent
      },
      {
        path: 'product-create',
        component: ProductCreateComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogueRoutingModule { }
