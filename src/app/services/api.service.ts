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
    return this.http.get<any>("http://localhost:3000/products");
  }
  getProducts(){
    return this.http.get<any>("http://localhost:3000/products");
  }
  postProduct(data:any){
    return this.http.post("http://localhost:3000/products",data);
  }
  
  getVendors(){
    return this.http.get<any>("http://localhost:3000/users?role=vendor");
  }
  deleteProduct(id:number){

    return this.http.delete("http://localhost:3000/products/" + id);
  }
  deleteVendor(id:number){
    return this.http.delete("http://localhost:3000/users/"+id);
  }
  updateProduct(id:number,data:any){
    return this.http.put("http://localhost:3000/products/"+id,data)
  }
}
