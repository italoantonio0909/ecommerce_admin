import { CatalogueCategory } from '../entities/Category';

export class CatalogueCategoryPaginateList {
    static readonly type = "CatalogueCategoryPaginateList";

    constructor(public limitOfDocuments: number, public page: number) { }
}