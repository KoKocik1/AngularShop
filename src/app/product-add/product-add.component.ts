import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/Product';
import { ProductsService } from '../ProductService/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  product: Product;
  constructor( private activatedRoute: ActivatedRoute, private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit(data): void {
    this.productsService.post(data).subscribe(res => {
      this.router.navigateByUrl('products');

    }, (error) => console.log(error));
  }
  anuluj(): void {
    this.router.navigateByUrl('products');
  }
}
