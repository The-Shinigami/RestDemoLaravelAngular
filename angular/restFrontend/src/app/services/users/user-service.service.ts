import { Injectable } from '@angular/core';
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api/users',
});
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private user: any = {
    isAuthenticated:false
  };
  private Authenticated: boolean = false;
  constructor() {
   }
  
  async auth(user:any) {
   return await api.post('/auth',user).then(
      (response) => {
       this.user = response.data;
       this.user.isAuthenticated = true;
        return this.user;
      })
  }

  getUser() {
     if (localStorage.getItem('user') != null)
    {
      this.user = JSON.parse(localStorage.getItem('user')+'');
      }
    return this.user;
  }
  isAuthenticated() {
    if (localStorage.getItem('user') != null)
    {
      this.user = JSON.parse(localStorage.getItem('user')+'');
      }
        
    return this.user.isAuthenticated;
 }
  
}
