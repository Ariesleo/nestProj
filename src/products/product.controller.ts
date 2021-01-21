import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductServices } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductServices) {}

  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number
  ) {
    const generateId = this.productService.addProducts(
      prodTitle,
      prodDesc,
      prodPrice
    );
    return { id: generateId };
  }

  @Get()
  getallProducts() {
    return this.productService.getAllProducts();
  }

}
