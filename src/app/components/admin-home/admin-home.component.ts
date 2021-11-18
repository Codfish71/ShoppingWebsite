import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

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
  constructor(private router:Router,private http:HttpClient,private apiService:ApiService) { }

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
  }

  sortProducts(){

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
  }
  getVendors(){
    
  }

  deleteProduct(id:number){
    this.apiService.deleteProduct(id).subscribe(
      res => {
      alert("Deleted Successfully!!");

      }
      );
  }

  deleteVendor(id:number){
    this.apiService.deleteVendor(id).subscribe(
      resp => {
        alert("deleted Successfully")
      }
    )
  }

  logout() {
    this.router.navigate(['login'])
  }

}
