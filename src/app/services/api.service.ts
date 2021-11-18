import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  addNewVendor(vendor: any) {
    return this.http.post("http://localhost:3000/users",vendor);
  }
  

  constructor(private http:HttpClient) { }

  postCustomer(data:any) {
    return this.http.post("http://localhost:3000/users",data);
  }
  getCustomers() {
    return this.http.get<any>("http://localhost:3000/users");
  }

  addNewProduct(product: any) {
    return this.http.post("http://localhost:3000/products",product);
  }
  getProducts(){
    return this.http.get<any>("http://localhost:3000/products");
  }
  getProductsAscendingPrice(){
    return this.http.get<any>("http://localhost:3000/products?_sort=price&_order=asc");
  }
  getProductsDescendingPrice(){
    return this.http.get<any>("http://localhost:3000/products?_sort=price&_order=desc");
  }
  searchProductByName(keyword:string){
    return this.http.get<any>("http://localhost:3000/products?q="+keyword);
  }
  postProduct(data:any){
    return this.http.post("http://localhost:3000/products",data);
  }

  placeOrder(product:any){
    return this.http.post("http://localhost:3000/cart",product);
  }
  viewOrdersofUser(){
    return this.http.get<any>("http://localhost:3000/cart");
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
  updateVendor(id:number,data:any){
    return this.http.put("http://localhost:3000/users/"+id,data)
  }
}
