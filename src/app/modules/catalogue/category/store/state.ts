import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CatalogueCategory } from '../entities/Category';
import { CatalogueCategoryService } from '../services/catalogue-category.service';
import { CatalogueCategoryPaginateList } from './actions';

export interface CatalogueCategoryModelState {
    categoryCount: number;
    categories: Array<CatalogueCategory>;
}

@State<CatalogueCategoryModelState>({
    name: 'catalogueCategory',
    defaults: {
        categoryCount: 0,
        categories: [],
    }
})
@Injectable()
export class CatalogueCategoryState {

    constructor(private service: CatalogueCategoryService) { }

    @Selector()
    static categoriesPaginateList(state: CatalogueCategoryModelState) {
        return state.categories
    }

    @Selector()
    static categoriesCount(state: CatalogueCategoryModelState) {
        return state.categoryCount
    }

    @Action(CatalogueCategoryPaginateList)
    catalogueCategoryPaginateList(
        ctx: StateContext<CatalogueCategoryModelState>,
        { limitOfDocuments, page }: CatalogueCategoryPaginateList
    ) {
        const state = ctx.getState();

        return this.service.catalogueCategoryListPaginate(limitOfDocuments, page).pipe(
            tap(({ results, count }) =>
                ctx.setState({ ...state, categories: results, categoryCount: count }))
        )
    }
}