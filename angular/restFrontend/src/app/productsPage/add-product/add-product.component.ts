import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductServiceService } from 'src/app/services/products/product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  })
   @Output()
  resetListProducts = new EventEmitter();
  constructor(private productService: ProductServiceService) { }
  async onSubmit() {  
    const condition = await this.productService.addProduct(this.productForm.value);
    console.log(condition)
    if (condition) {  
      this.resetListProducts.emit();
      let close: HTMLElement = document.querySelector(".close-modal") as HTMLElement; 
      close.click();
    }  
  
    
      
  }
  
  ngOnInit(): void {
     var modals = document.querySelectorAll(".modal");
    modals.forEach((element: any) => {
      this.hideModal(element);
      this.showModal(element);
    });
  }

  hideModal(element: any) {
    element.querySelector(".close-modal").addEventListener('click', () => {
      element.classList.add("hidden");
    });
  }
  showModal(element: any) {
    element.previousElementSibling.addEventListener('click', () => {
      element.classList.remove("hidden");
    });

  }

}
