import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/Product';
import { ProductsService } from '../ProductService/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() data: Product;
  constructor(private router: Router, private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  @Output('onAddClick') onAddClick: EventEmitter<Product> = new EventEmitter<Product>();
  @Output('deleteProductClick') onDeleteeClick: EventEmitter<Product> = new EventEmitter<Product>();

  onEdytujClick(): void {
    this.router.navigateByUrl("products/" + this.data.id);
  }

  onDodajClick(): void {
    this.onAddClick.emit(this.data);
  }
  onDeleteClick(): void {
    this.onDeleteeClick.emit(this.data);
    //this.productsService.delete(this.data.id);
  }
}
