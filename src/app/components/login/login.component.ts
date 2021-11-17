import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private apiService:ApiService,private router:Router) { }

  public loginForm!:FormGroup;
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  login(){
    this.apiService.getCustomers().subscribe(
      (res) => {
        const user = res.find((a: any)=>{
          return a.user_email === this.loginForm.value.email &&
          a.user_password === this.loginForm.value.password 
        })
        if(user){
          
          
          if(user.role == "") {
            alert("Login Successful!!!");
            this.router.navigate(['customerhome']);
          }
          else if(user.role == "admin") {
            alert("Login Successful!!!");
            this.router.navigate(["adminHome"]);
          }
          else if(user.role == "vendor")
          {
            alert("Login Successful!!!");
            this.router.navigate(["vendorHome"]);
          }
          this.loginForm.reset();
          
        }
        else{
          alert("user not found!!!");
        }

        },err=>{
        
          alert("Something went wrong!!!")
      }
    )
  }

}
