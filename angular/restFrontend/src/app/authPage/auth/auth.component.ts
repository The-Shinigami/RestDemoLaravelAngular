import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/users/user-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  userForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private userService:UserServiceService,private router: Router) {}
 async onSubmit() {
    localStorage.setItem("user",JSON.stringify(await this.userService.auth(this.userForm.value)));
    this.router.navigate(['products']);
   }
  ngOnInit(): void {
  }

}
