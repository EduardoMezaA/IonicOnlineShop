import { Product } from "./product.model";

export interface Buy{
    products: Product[];
    total: number;
    date: Date;
}