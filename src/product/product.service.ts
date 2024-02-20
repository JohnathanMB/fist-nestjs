import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';

@Injectable()
export class ProductService {
  private products: Array<string> = [];
  constructor() {
    for (let i = 0; i < 10; i++) {
      this.products.push(faker.commerce.productName());
    }
  }

  getProducts(): Array<string> {
    return this.products;
  }
}
