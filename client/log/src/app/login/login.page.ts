import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public router: Router, public loginService: LoginService) { }

  ngOnInit() {
  }

  login(form: NgForm){
    this.loginService.postLogin(form.value)
    .subscribe(res  =>{
      let data = JSON.stringify(res);
      let dataLogin = JSON.parse(data);
      // console.log(dataLogin.User);
      // console.log(data);
      // console.log(res);
      // this.router.navigate(['/main/home']);
      // console.log(Object.keys(res));
      if (dataLogin.User){
        this.router.navigate(['/hello']);
      }else{
        console.log('Error not found');
        
      }
 
      
    })
  }

}
