export interface CatalogueProductClass {
    readonly name: string;
    readonly required_shipping: boolean;
    readonly track_stock: boolean;
    // readonly options?: Array<Option>;
    readonly created_at?: number;
    readonly modified_at?: number;
}