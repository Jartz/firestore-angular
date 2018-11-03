import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [];
  editingProduct: Product;
  editing = false;

  constructor(public productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      console.log(products);
      this.products = products;
    });
  }

  deleteProduct(event, product) {
    console.log(product);
    if (confirm('Esta seguro de eliminar')) {
      this.productService.deleteProducts(product);
    }
  }

  editProduct(event, product) {
    this.editingProduct = product;
    console.log(this.editingProduct);
    this.editing = !this.editing;
  }

  updateProduct() {
    this.productService.updateProduct(this.editingProduct);
    this.editingProduct = {} as Product;
    this.editing = false;
    console.log(this.editingProduct);
  }
}
