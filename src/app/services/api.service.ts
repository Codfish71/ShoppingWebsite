import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postCustomer(data:any) {
    return this.http.post("http://localhost:3000/users",data);
  }
  getCustomers() {
    return this.http.get<any>("http://localhost:3000/users");
  }
  getProducts(){
    return this.http.get<any>("http://localhost:3000/products");
  }
  postProduct(data:any){
    return this.http.post("http://localhost:3000/products",data);
  }
  
  getVendors(){
    return this.http.get<any>("http://localhost:3000/users?role=vendor")
  }
}
