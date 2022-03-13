import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './productsPage/list-products/list-products.component';
import { AuthComponent } from './authPage/auth/auth.component';
import { AuthGuardService } from './services/authGuard/auth-guard.service';
const routes: Routes = [
  { path: '', pathMatch: 'full', component: AuthComponent },
  { path: 'products', pathMatch: 'full',canActivate: [AuthGuardService], component: ListProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
  
export class AppRoutingModule { }
