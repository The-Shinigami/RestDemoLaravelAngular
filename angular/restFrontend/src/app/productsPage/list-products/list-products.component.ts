import {
  Component,
  OnInit
} from '@angular/core';
import {
  ProductServiceService
} from 'src/app/services/products/product-service.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products: any;
  constructor(private productService: ProductServiceService) {
    this.getProducts();
   
  }
  async getProducts() {
    this.products =  await this.productService.getProducts();
  }


  ngOnInit(): void {}

}