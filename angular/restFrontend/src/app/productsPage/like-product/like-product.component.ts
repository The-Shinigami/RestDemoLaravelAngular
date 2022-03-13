import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ProductServiceService } from 'src/app/services/products/product-service.service';

@Component({
  selector: 'app-like-product',
  templateUrl: './like-product.component.html',
  styleUrls: ['./like-product.component.css']
})
export class LikeProductComponent implements OnInit {
  @Input()
  productForLike: any;

  @Output()
  resetListProducts = new EventEmitter();

  @ViewChild('heart') heart: ElementRef<HTMLInputElement> = {} as ElementRef;

  constructor(private productService: ProductServiceService) { }
  
  ngOnInit(): void {
  }
    async likeProduct(product: any) {
    const condition = await this.productService.likeProduct(product);
    console.log(condition)
    if (condition) {  
      this.heart.nativeElement.style.minWidth = '60px';
      this.resetListProducts.emit();
    }   
      /*  this.resetListProducts.emit(parametre); */
  }

}
