import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasketService } from '../BasketService/basket.service';
import { BasketItem } from '../models/BasketItem';
import { Pagination } from '../models/Paginations';
import { Product } from '../models/Product';
import { ProductsService } from '../ProductService/products.service';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{
  page: number=1;
  rowsPerPage: number = 5;
  produkty: Product[];
  koszyk: BasketItem[] = [];

  constructor(private productsService: ProductsService, private basketService: BasketService, private router: Router, private jwtHelper: JwtHelperService) {
    this.refresh();
    basketService.get().subscribe(response => this.koszyk = response);
  }

  refresh(): void {
    let pagination = new Pagination();
    pagination.page = this.page;
    pagination.rowsPerPage = this.rowsPerPage;
    this.productsService.get(pagination).subscribe(response => this.produkty = response.data);
  }
  addProduct(): void {
    this.router.navigateByUrl('productsAdd');
  }
  DeleteProductClick(x: Product): void {
    this.productsService.delete(x.id).subscribe(response => this.produkty = response.data);
  }
  BtnAddClick(x: Product): void {
    this.basketService.post(x.id, 1).subscribe(response => this.koszyk = response);
  }
  ClearClick(): void {
    this.basketService.clear().subscribe(response => this.koszyk = response);
  }

  MoreClick(x: BasketItem): void {
    this.basketService.put(x.id, x.count).subscribe(response => this.koszyk = response);
  }
  LessClick(x: BasketItem): void {
    this.basketService.put(x.id, x.count).subscribe(response => this.koszyk = response);
  }
  DeleteClick(x: BasketItem): void {
    this.basketService.delete(x.id).subscribe(response => this.koszyk = response);
  }
  isUserAuthenticated() {
    const token: string = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    return false;
  }
}
