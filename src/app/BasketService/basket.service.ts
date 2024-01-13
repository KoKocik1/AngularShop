import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BasketItem } from '../models/BasketItem';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor(private httpClient: HttpClient) { }

  put(productId: number, count: number): Observable<BasketItem[]> {
    return this.httpClient.put<BasketItem[]>('http://localhost:12124/Basket/' + productId, count, {
      headers: new HttpHeaders({ Authorization: 'Bearer' + localStorage.getItem('jwt') })
    });
  }
  post(productId: number, count: number): Observable<BasketItem[]> {
    return this.httpClient.post<BasketItem[]>('http://localhost:12124/Basket/' + productId, count, {
      headers: new HttpHeaders({ Authorization: 'Bearer' + localStorage.getItem('jwt') })
    });
  }
  clear(): Observable<BasketItem[]> {
    return this.httpClient.delete<boolean>('http://localhost:12124/Basket/', {
      headers: new HttpHeaders({ Authorization: 'Bearer' + localStorage.getItem('jwt') })
    }).pipe(map(x=>[]));
  }
  delete(productId: number): Observable<BasketItem[]> {
    return this.httpClient.delete<BasketItem[]>('http://localhost:12124/Basket/' + productId, {
      headers: new HttpHeaders({ Authorization: 'Bearer' + localStorage.getItem('jwt') })
    });
  }
  get(): Observable<BasketItem[]> {
    return this.httpClient.get<BasketItem[]>('http://localhost:12124/Basket', {
      headers: new HttpHeaders({ Authorization: 'Bearer' + localStorage.getItem('jwt') })
    });
  }
}
