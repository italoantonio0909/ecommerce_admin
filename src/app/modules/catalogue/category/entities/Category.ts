export interface CatalogueCategory {
    readonly id?: number;
    readonly name: string;
    readonly description: string;
    readonly image?: File | null;
    readonly is_public: boolean;
    readonly created_at?: number;
    readonly modified_at?: number;
}

export interface CatalogueCategoryPaginate {
    results: Array<CatalogueCategory>;
    count: number;
}