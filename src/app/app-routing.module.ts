import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "registro", component:RegisterComponent},
  {path: "login", component:LoginComponent},
  {path: "producto/:id", component:ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
