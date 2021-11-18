import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import {FormBuilder,FormGroup} from '@angular/forms';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-vendor-home',
  templateUrl: './vendor-home.component.html',
  styleUrls: ['./vendor-home.component.css']
})
export class VendorHomeComponent implements OnInit {

  constructor(private router:Router,private apiService:ApiService,private formBuilder:FormBuilder) { }
  data:Array<any> = [];
  totalRecords:number=0;
  page:number=1;
  public addProductForm!:FormGroup;
  public updateProductForm!:FormGroup;
  private product:any;
  ngOnInit(): void {
    this.apiService.getProducts().subscribe(
      (resp) => {
        this.data = resp;
        console.log(this.data);
        this.totalRecords = this.data.length;
      }

    );

    this.addProductForm = this.formBuilder.group({
      title:[''],
      description:[''],
      category:[''],
      price:[],
      vendor:['']
    })
    this.updateProductForm = this.formBuilder.group({
      title:[''],
      description:[''],
      category:[''],
      price:[],
      vendor:['']
    })
  }

  addNewProduct(){
   
    this.apiService.addNewProduct(this.addProductForm.value).subscribe(
      resp => 
      {
        alert("Product added successfully!!!");
      },err =>
      {
        alert("Some error occured")
      }
    );
      this.router.navigate(['vendorhome'])
  }

  deleteProduct(id:number){
    this.apiService.deleteProduct(id).subscribe(
      res => {
      alert("Deleted Successfully!!");
      },err => 
      {
        alert('Some error occured')
      }
      );
      this.router.navigate(['vendorhome'])
  }
  updateProduct(){
    
    this.product = this.apiService.getProductByName(this.updateProductForm.value.title);
    console.log(this.product.id)
    this.apiService.updateProduct(this.product.id,this.updateProductForm.value);
    this.router.navigate(['vendorhome'])
  }

  logout(){
    this.router.navigate(['login'])
  }
}
