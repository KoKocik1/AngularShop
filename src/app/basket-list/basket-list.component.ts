import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasketService } from '../BasketService/basket.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BasketItem } from '../models/BasketItem';
@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.component.html',
  styleUrls: ['./basket-list.component.css']
})
export class BasketListComponent implements OnInit {
  koszyk: BasketItem[] = [];
  constructor(private basketService: BasketService, private router: Router, private jwtHelper: JwtHelperService) {
    this.refresh();
    basketService.get().subscribe(response => this.koszyk = response);}

  refresh(): void {
    this.basketService.get().subscribe(response => this.koszyk = response);
  }
  ngOnInit(): void {
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
