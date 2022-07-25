import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { CatalogueCategoryState } from '../../store/state';
import { Observable } from 'rxjs';
import { CatalogueCategory } from '../../entities/Category';
import { CatalogueCategoryPaginateList } from '../../store/actions';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
})
export class CategoryListComponent implements OnInit {

  limitOfDocuments: number = 5;
  page: number = 1;

  constructor(private store: Store) { }

  @Select(CatalogueCategoryState.categoriesPaginateList) public categories$: Observable<Array<CatalogueCategory>>

  @Select(CatalogueCategoryState.categoriesCount) public categoriesCount$: Observable<number>;

  ngOnInit(): void {
    this.store.dispatch(new CatalogueCategoryPaginateList(5, 0));
  }


  categoriesPaginateList = (limitOfDocuments: number, page: number,) => {
    this.page = page;
    this.limitOfDocuments = limitOfDocuments;
    this.store.dispatch(new CatalogueCategoryPaginateList(limitOfDocuments, page));
  }

  createCounter(counter: number) {
    const total = Math.ceil(counter / this.limitOfDocuments)
    return new Array(total)
  }

}
