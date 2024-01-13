import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/Product';
import { ProductsService } from '../ProductService/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product;
  private productId: number;
  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res => {
      this.productId = res['id'];
      this.productsService.getById(res['id']).subscribe(res2 => {
        if (res2 == null) {
          this.router.navigateByUrl('products');
        } else
          this.product = res2;
      }
      );
     
    });
  }

  onSubmit(event: NgForm): void {
    this.productsService.put(this.productId, event.value).subscribe(res => {
      this.router.navigateByUrl('products');
    }, (error) => console.log(error));
  }
  anuluj(): void{
    this.router.navigateByUrl('products');
  }
}
