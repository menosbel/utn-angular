import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product;
  constructor(private prdServ:ProductsService, private route:ActivatedRoute) { 
    const id = this.route.snapshot.paramMap.get("id")
    this.product = this.prdServ.getById(id)
    .subscribe(data=>{
      this.product = data[0];
      
    })

  }

  ngOnInit(): void {
  }

}
