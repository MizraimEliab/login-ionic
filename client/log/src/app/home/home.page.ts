import { Component } from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../models/user';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [UserService]
})
export class HomePage {

  constructor(public userService: UserService) {}
  ngOnInit(): void {
    this.getUsers();

  }

  addUser(form: NgForm){
    this.userService.postUser(form.value)
      .subscribe(res => {
        console.log(res);
      });
  }

  getUsers(){
    this.userService.getUsers()
    .subscribe(res =>{
      this.userService.users = res as User[];
      console.log(res);
   
    })
  }

}
