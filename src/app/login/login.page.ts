import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
user:string="";
password:string="";
  users=[
    {user:'usuario1',password:'contraseña1'},
    {user:'usuario1',password:'contraseña1'},
    {user:'usuario1',password:'contraseña1'}
  ];

  

  constructor(private router:Router) { }

  ngOnInit() {
  }
  login(){

  this.router.navigate(['/ordenes']);

  
  }
  
}
