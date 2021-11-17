import { Component, OnInit } from '@angular/core';

import {FormBuilder,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signUpForm!: FormGroup;
  constructor(private formBulder:FormBuilder, private apiService:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBulder.group({

      user_name:[''],
      user_phone:[],
      user_email:[''],
      user_password:[''],
      user_address:[''],
      role:['']
    })
  }

  signUp(){
    this.apiService.postCustomer(this.signUpForm.value).subscribe(
      res => {
        alert("Sign Up successful");
        this.signUpForm.reset();
        this.router.navigate(['login']);
      },err=>{
        alert("Something went wrong!!!");
      }
    );
  }

}
