import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  constructor(public productService: ProductService) {}

  ngOnInit() {}

  addProduct(event, product) {
    this.productService.addProduct(product);
  }
}
