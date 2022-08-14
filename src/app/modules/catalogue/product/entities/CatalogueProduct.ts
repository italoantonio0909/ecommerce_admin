import { CatalogueProductClass } from '../../product-class/entities/ProductClass';
import { CatalogueCategory } from '../../category/entities/Category';

export interface CatalogueProduct {
    readonly structure: string;
    readonly is_public: boolean;
    readonly parent: CatalogueProduct;
    readonly title: string;
    readonly description: string;
    readonly meta_title: string;
    readonly meta_description: string;
    readonly product_class: CatalogueProductClass;
    readonly categories: Array<CatalogueCategory>;
    readonly is_discountable: boolean;
    readonly recommended_products: Array<CatalogueProduct>;
    readonly rating: number;
    readonly created_at?: number;
    readonly modified_at?: number;
}