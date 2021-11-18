import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {

  constructor(private apiService:ApiService, private router:Router) { }


  data:Array<any> = []
  vendors:Array<any> = []
  totalProducts:number=0;
  totalVendors:number=0;
  page1:number=1;
  
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

  logout() {
    this.router.navigate(['login'])
  }

}
