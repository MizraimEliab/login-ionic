import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../models/user';
@Component({
  selector: 'app-hello',
  templateUrl: './hello.page.html',
  styleUrls: ['./hello.page.scss'],
  providers: [UserService]
})
export class HelloPage implements OnInit {
  arrContacts: Array<any> = [] as Array<JSON>;

  constructor(public userService: UserService) { }
  
  ngOnInit() {
    this.getUsers()
    
  }

  getUsers(){
    this.userService.getUsers()
    .subscribe(res =>{
      this.userService.users = res as User[];
      console.log(res);
   
    })
  }

 
 

}
