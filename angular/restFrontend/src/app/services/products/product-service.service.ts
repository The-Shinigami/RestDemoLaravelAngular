import {
  Injectable
} from '@angular/core';
import axios from 'axios'
import { UserServiceService } from '../users/user-service.service';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/products',
});

@Injectable({
  providedIn: 'root'
})
   
export class ProductServiceService {
  private products: any;
  constructor(private userService:UserServiceService) {}
     
  async getProducts() {
    console.log(this.userService.getUser().user.token)
    const headers = {
  'Content-Type': 'application/json',
  'Authorization': this.userService.getUser().user.token
}
  return  await api.get('',{
    headers : headers
  }).then(
      (response) => {
      this.products = response.data;
        return this.products;
    }).catch(
      (erreur) => {
        console.log(erreur);
        return false;
        }
      )  
  }

  async likeProduct(product: any) {
  return await api.put('/' + product.id, {
      "like": product.like + 1
    }).then(
      () => {
        return true;
      }).catch(
      () => {
          return false;
      })
  }

   async addProduct(product:any) {
   return await api.post('',product).then(
      () => {
        return true;
      }).catch(() => {
        return false;
      })
  }
}