import { Injectable } from '@nestjs/common';
import { ProductModel } from './product.model';

@Injectable()
export class ProductServices {
  private product: ProductModel[] = [];

  addProducts(title: string, desc: string, price: number) {
    const productId = new Date().toString();
    const newProduct = new ProductModel(productId, title, desc, price);
    this.product.push(newProduct);
    return productId;
  }
}
