import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { CustomerHomeComponent } from './components/customer-home/customer-home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { VendorHomeComponent } from './components/vendor-home/vendor-home.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'customerhome',component:CustomerHomeComponent},
  {path:'adminHome',component:AdminHomeComponent},
  {path:'vendorHome',component:VendorHomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
