import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-vendor-home',
  templateUrl: './vendor-home.component.html',
  styleUrls: ['./vendor-home.component.css']
})
export class VendorHomeComponent implements OnInit {

  constructor(private router:Router,private apiService:ApiService) { }
  data:Array<any> = [];
  totalRecords:number=0;
  page:number=1;
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

  logout(){
    this.router.navigate(['login'])
  }
}
