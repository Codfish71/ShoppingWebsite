import { Product } from "./product";

export class Cart {
    cartId!:number;
    userId!:number;
    cartlist:Array<Product> = [];
}
