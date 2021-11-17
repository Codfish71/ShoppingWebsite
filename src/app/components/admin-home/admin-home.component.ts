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
  totalRecords:number=0;
  page1:number=1;
  page2:number=1;
  constructor(private router:Router,private http:HttpClient,private apiService:ApiService) { }

  ngOnInit(): void {
  }

  getProducts(){
    this.apiService.getProducts().subscribe(
      (resp) => {
        this.data = resp;
        console.log(this.data);
        this.totalRecords = this.data.length;
      }

    );
  }
  getVendors(){
    this.apiService.getVendors().subscribe(
      (resp2) => {
        this.vendors = resp2;
        console.log(this.vendors);
        this.totalRecords = this.vendors.length;
      }

    );
  }

  deleteProduct(){

  }

  deleteVendor(){
    
  }

  logout() {
    this.router.navigate(['login'])
  }

}
