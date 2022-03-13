import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListProductsComponent } from './productsPage/list-products/list-products.component';
import { LikeProductComponent } from './productsPage/like-product/like-product.component';
import { AddProductComponent } from './productsPage/add-product/add-product.component';
import { AuthComponent } from './authPage/auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    LikeProductComponent,
    AddProductComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
