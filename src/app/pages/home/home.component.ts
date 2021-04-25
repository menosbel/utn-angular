import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  card = "card"
  alert = "alert"
  productos_async;
  comprado = false;

  constructor(private prdServ:ProductsService) { 
    this.productos_async = this.prdServ.getAll()
  }

  comprar(){
    this.comprado = true;
    
  }

  ngOnInit(): void {
  }

}
