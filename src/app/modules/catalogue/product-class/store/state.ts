import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CatalogueProductClass } from '../entities/ProductClass';
import { ProductClassService } from '../services/product-class.service';
import { CatalogueProductClassPaginateList, CatalogueProductClassCreate } from './actions';

export interface CatalogueProductClassModelState {
    productClassCount: number;
    productClassList: Array<CatalogueProductClass>;
}

@State<CatalogueProductClassModelState>({
    name: 'catalogueProductClass',
    defaults: {
        productClassCount: 0,
        productClassList: [],
    }
})
@Injectable()
export class CatalogueProductClassState {

    constructor(private service: ProductClassService) { }

    @Selector()
    static productClassListPaginateList(state: CatalogueProductClassModelState) {
        return state.productClassList
    }

    @Selector()
    static productClassListPaginateListCount(state: CatalogueProductClassModelState) {
        return state.productClassCount
    }

    @Action(CatalogueProductClassPaginateList)
    catalogueCategoryPaginateList(
        ctx: StateContext<CatalogueProductClassModelState>,
        { limitOfDocuments, page }: CatalogueProductClassPaginateList
    ) {
        const state = ctx.getState();

        return this.service.productClassListPaginate(limitOfDocuments, page).pipe(
            tap(({ results, count }) =>
                ctx.setState({ ...state, productClassList: results, productClassCount: count }))
        )
    }

    @Action(CatalogueProductClassCreate)
    catalogueCategoryCreate(
        _: StateContext<CatalogueProductClassModelState>,
        { productClass }: CatalogueProductClassCreate
    ) {
        return this.service.productClassCreate(productClass)
    }
}