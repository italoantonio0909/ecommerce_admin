import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CatalogueProductClass } from '../../entities/ProductClass';
import { CatalogueProductClassState } from '../../store/state';
import { CatalogueProductClassPaginateList } from '../../store/actions';

@Component({
  selector: 'app-product-class-paginate',
  templateUrl: './product-class-paginate.component.html',
})
export class ProductClassPaginateComponent implements OnInit {

  limitOfDocuments: number = 5;
  page: number = 1;

  constructor(private store: Store) { }

  @Select(CatalogueProductClassState.productClassListPaginateList) public productClass$: Observable<Array<CatalogueProductClass>>;

  @Select(CatalogueProductClassState.productClassListPaginateListCount) public categoriesCount$: Observable<number>;

  ngOnInit(): void {
    this.store.dispatch(new CatalogueProductClassPaginateList(5, 0));
  }

  productClassPaginateList = (limitOfDocuments: number, page: number,) => {
    this.page = page;
    this.limitOfDocuments = limitOfDocuments;
    this.store.dispatch(new CatalogueProductClassPaginateList(limitOfDocuments, page));
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
    return this.productClassPaginateList(this.limitOfDocuments, this.page + 1);
  }

  navigatePrevious(counter: number) {
    const total = Math.ceil(counter / this.limitOfDocuments);
    if (this.page === 1) {
      return false;
    }
    return this.productClassPaginateList(this.limitOfDocuments, this.page - 1);
  }

  changeValuePage(event: any) {
    const limitOfDocuments = parseInt(event.target.value);
    this.productClassPaginateList(limitOfDocuments, this.page);
  }

}
