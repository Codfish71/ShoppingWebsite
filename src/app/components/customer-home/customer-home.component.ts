import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import {FormBuilder,FormGroup} from '@angular/forms'; 
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {

  constructor(private apiService:ApiService, private router:Router,private formBuilder:FormBuilder) { }

  cartObj = new Cart();
  cart:Array<any> = [];
  data:Array<any> = [];
  orderList:Array<any> = [];
  vendors:Array<any> = []
  totalProducts:number=0;
  totalVendors:number=0;
  totalOrders:number=0;
  page1:number=1;
  page2:number=1;
  public searchForm!:FormGroup;
  totalAmount:number = 0;
  
  
  
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

    this.searchForm = this.formBuilder.group({
      keyword:''
    })
  }



  sortLowToHigh(){
    this.apiService.getProductsAscendingPrice().subscribe(
      (resp) => {
        this.data = resp;
        console.log(this.data);
        this.totalProducts = this.data.length;
      }

    );
  }
  sortHighToLow(){
    this.apiService.getProductsDescendingPrice().subscribe(
      (resp) => {
        this.data = resp;
        console.log(this.data);
        this.totalProducts = this.data.length;
      }

    );
  }
  searchProductByName(){
    this.apiService.searchProductByName(this.searchForm.value.keyword).subscribe(
      (resp) => {
        this.data = resp;
        console.log(this.data);
        this.totalProducts = this.data.length;
      }

    );
  }
 
  addToCart(product:any){
   
    this.cartObj.cartlist.push(product);
    this.cartObj.cartAmount += product.price;
    this.totalAmount+= product.price; 
    this.cart.push(product);
    /*
    this.apiService.addToCart(this.cart).subscribe(
      resp => {
        alert("Product added successfully!!!");

      },err => {
        alert("Some error occured")
      }
    )*/
  }

  viewCart(){
    this.totalAmount = this.cartObj.cartAmount;
    return this.cartObj.cartlist;
  }
  placeOrder(){
    this.cartObj.userId 
    if(this.cartObj.cartlist.length == 0) {
      alert("Select at least one product")
    }
    else {
    this.apiService.placeOrder(this.cartObj).subscribe(
      resp => {
        alert("Order Place successfully!!!");

      },err => {
        alert("Some error occured")
      }
    )
    }
    this.cart = []
  }
  deleteProduct(product:any){
    let index = this.cart.indexOf(product);
   this.cart.splice(index,1)
   this.cartObj.cartlist.splice(index,1);
  }
  
  viewOrdersofUser() {
    this.apiService.viewOrdersofUser().subscribe(
      resp => {
        this.orderList = resp;
         
        this.totalOrders = this.orderList.length;
      }
    );
  }
  logout() {
    this.router.navigate(['login'])
  }


}
