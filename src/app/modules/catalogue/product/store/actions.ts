import { CatalogueProduct } from '../entities/CatalogueProduct';

export class CatalogueProductPaginateList {
    static readonly type = "Catalogue product paginate list";

    constructor(public limitOfDocuments: number, public page: number) { }
}


export class CatalogueProductCreate {
    static readonly type = "Catalogue product create";

    constructor(public product: CatalogueProduct) { }
}