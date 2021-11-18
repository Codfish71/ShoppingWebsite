import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import {FormBuilder,FormGroup} from '@angular/forms';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {


  data:Array<any> = [];
  vendors:Array<any> = [];
  totalProducts:number=0;
  totalVendors:number=0;
  page1:number=1;
  page2:number=1;
  public addProductForm!:FormGroup;
  public addVendorForm!:FormGroup;
  newProduct = new Product();
  constructor(private router:Router,private http:HttpClient,private apiService:ApiService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.apiService.getProducts().subscribe(
      (resp) => {
        this.data = resp;
        console.log(this.data);
        this.totalProducts = this.data.length;
      }

    );

    this.apiService.getVendors().subscribe(
      (resp2) => {
        this.vendors = resp2;
        console.log(this.vendors);
        this.totalVendors = this.vendors.length;
      }

    );

    this.addProductForm = this.formBuilder.group({
      title:[''],
      description:[''],
      category:[''],
      price:[],
      vendor:['']
    })
    this.addVendorForm = this.formBuilder.group({
      user_name:[''],
      user_email:[''],
      user_address:[''],
      user_phone:[],
      role:[''],
      user_password:['']
    })
  }


  updateProduct(data:any){
    const id = data.id; 
    this.apiService.updateProduct(id,data).subscribe(
      resp => {
        alert("Updated  successfully!!!");
      },err=>{
        alert("Some issue happened");
      }

    );
    this.router.navigate(['adminHome']);
  }
  updateVendor(data:any){
    const id = data.id; 
    this.apiService.updateVendor(id,data).subscribe(
      resp => {
        alert("Updated  successfully!!!");
      },err=>{
        alert("Some issue happened");
      }

    );
    this.router.navigate(['adminHome']);
  }
 
  addNewVendor() {
    this.apiService.addNewVendor(this.addVendorForm.value).subscribe(
      resp => 
      {
        alert("Vendor added successfully!!!");
      },err =>
      {
        alert("Some error occured")
      }
    );
    this.router.navigate(['adminHome']);
  }
  deleteProduct(id:number){
    this.apiService.deleteProduct(id).subscribe(
      res => {
      alert("Deleted Successfully!!");

      }
      );
      this.router.navigate(['adminHome']);
  }

  deleteVendor(id:number){
    this.apiService.deleteVendor(id).subscribe(
      resp => {
        alert("deleted Successfully")
      }
    );
    this.router.navigate(['adminHome']);
  }

  addNewProduct(){
    /*
    this.newProduct.title = this.addProductForm.value.productTitle;
    this.newProduct.description = this.addProductForm.value.productDescription;
    this.newProduct.category = this.addProductForm.value.productCategory;
    this.newProduct.price = this.addProductForm.value.productPrice;
    this.newProduct.vendor = this.addProductForm.value.productVendor;
    */
    this.apiService.addNewProduct(this.addProductForm.value).subscribe(
      resp => 
      {
        alert("Product added successfully!!!");
      },err =>
      {
        alert("Some error occured")
      }
    );
    this.router.navigate(['adminHome']);

  }

  logout() {
    this.router.navigate(['login'])
  }

}
