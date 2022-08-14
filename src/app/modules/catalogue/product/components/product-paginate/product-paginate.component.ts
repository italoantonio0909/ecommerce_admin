import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { CatalogueProductState } from '../../store/state';
import { Observable } from 'rxjs';
import { CatalogueProduct } from '../../entities/CatalogueProduct';
import { CatalogueProductPaginateList } from '../../store/actions';

@Component({
  selector: 'app-product-paginate',
  templateUrl: './product-paginate.component.html',
})
export class ProductPaginateComponent implements OnInit {

  limitOfDocuments: number = 5;
  page: number = 1;

  constructor(private store: Store) { }

  @Select(CatalogueProductState.productListPaginateList) public products$: Observable<Array<CatalogueProduct>>;

  @Select(CatalogueProductState.productListPaginateListCount) public productsCount$: Observable<number>;

  ngOnInit(): void {
    this.store.dispatch(new CatalogueProductPaginateList(5, 0));
  }

  productPaginateList = (limitOfDocuments: number, page: number,) => {
    this.page = page;
    this.limitOfDocuments = limitOfDocuments;
    this.store.dispatch(new CatalogueProductPaginateList(limitOfDocuments, page));
  }

  createCounter(counter: number) {
    const total = Math.ceil(counter / this.limitOfDocuments)
    return new Array(total)
  }

  navigateNext(counter: number) {
    const total = Math.ceil(counter / this.limitOfDocuments);
    if (this.page === total) {
      return false;
    }
    return this.productPaginateList(this.limitOfDocuments, this.page + 1);
  }

  navigatePrevious(counter: number) {
    const total = Math.ceil(counter / this.limitOfDocuments);
    if (this.page === 1) {
      return false;
    }
    return this.productPaginateList(this.limitOfDocuments, this.page - 1);
  }

  changeValuePage(event: any) {
    const limitOfDocuments = parseInt(event.target.value);
    this.productPaginateList(limitOfDocuments, this.page);
  }

}
