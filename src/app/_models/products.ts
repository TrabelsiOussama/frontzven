export class ProductModelServer {
    id_product: number;
    product_title: string;
    product_description:string;
    image:string;
    images:string;
    product_price:number;
    ratingsQuantity:number;
    ratingsAverage:number;
}

export interface ServerResponse{
    count:number;
    products: ProductModelServer[]
}
