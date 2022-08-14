import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CatalogueProduct } from '../entities/CatalogueProduct';
import { CatalogueProductService } from '../services/catalogue-product.service';
import { CatalogueProductPaginateList, CatalogueProductCreate } from './actions';

export interface CatalogueProductModelState {
    productCount: number;
    productList: Array<CatalogueProduct>;
}

@State<CatalogueProductModelState>({
    name: 'catalogueProduct',
    defaults: {
        productCount: 0,
        productList: [],
    }
})
@Injectable()
export class CatalogueProductState {

    constructor(private service: CatalogueProductService) { }

    @Selector()
    static productListPaginateList(state: CatalogueProductModelState) {
        return state.productList
    }

    @Selector()
    static productListPaginateListCount(state: CatalogueProductModelState) {
        return state.productCount
    }

    @Action(CatalogueProductPaginateList)
    catalogueCategoryPaginateList(
        ctx: StateContext<CatalogueProductModelState>,
        { limitOfDocuments, page }: CatalogueProductPaginateList
    ) {
        const state = ctx.getState();

        return this.service.productListPaginate(limitOfDocuments, page).pipe(
            tap(({ results, count }) =>
                ctx.setState({ ...state, productList: results, productCount: count }))
        )
    }

    @Action(CatalogueProductCreate)
    catalogueCategoryCreate(
        _: StateContext<CatalogueProductModelState>,
        { product }: CatalogueProductCreate
    ) {
        return this.service.productCreate(product)
    }
}