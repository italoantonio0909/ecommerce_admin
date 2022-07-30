import { CatalogueCategory } from '../entities/Category';

export class CatalogueCategoryPaginateList {
    static readonly type = "Catalogue category paginate list";

    constructor(public limitOfDocuments: number, public page: number) { }
}


export class CatalogueCategoryCreate {
    static readonly type = "Catalogue category create";

    constructor(public category: CatalogueCategory) { }
}