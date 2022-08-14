import { CatalogueProductClass } from "../entities/ProductClass";

export class CatalogueProductClassPaginateList {
    static readonly type = "Catalogue product class paginate list";

    constructor(public limitOfDocuments: number, public page: number) { }
}


export class CatalogueProductClassCreate {
    static readonly type = "Catalogue product class create";

    constructor(public productClass: CatalogueProductClass) { }
}