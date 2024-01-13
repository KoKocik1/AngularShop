import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatedData } from '../models/PaginatedData';
import { Pagination } from '../models/Paginations';
import { PostProductDto } from '../models/PostProduct';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) {
  }

  getById(id: number): Observable<Product> {
    return this.httpClient.get<Product>('http://localhost:12124/Products/' + id, {
      headers: new HttpHeaders({ Authorization: 'Bearer' + localStorage.getItem('jwt') })
    });
  }
  get(pagination?: Pagination): Observable<PaginatedData<Product>> {
    if (pagination == null) {
      pagination = new Pagination();
      pagination.page = 1;
      pagination.rowsPerPage = 5;
      pagination.sortColumn = "name";
      pagination.sortAscending = false;

    }
    pagination.sortColumn = "name";
    pagination.sortAscending = false;

    return this.httpClient.get<PaginatedData<Product>>('http://localhost:12124/Products?' +
      'page=' + pagination.page +
      '&rowsPerPage=' + pagination.rowsPerPage +
      '&sortAscending=' + pagination.sortAscending +
      '&sortColumn=' + pagination.sortColumn, {
      headers: new HttpHeaders({ Authorization: 'Bearer' + localStorage.getItem('jwt') })
    });
  }
  put(productId: number, dto: PostProductDto): Observable<Product> {

    return this.httpClient.put<Product>('http://localhost:12124/Products/' + productId, dto, {
      headers: new HttpHeaders({ Authorization: 'Bearer' + localStorage.getItem('jwt') })
    });
  }
  post(dto: PostProductDto): Observable<Product> {
    return this.httpClient.post<Product>('http://localhost:12124/Products/', dto, {
      headers: new HttpHeaders({ Authorization: 'Bearer' + localStorage.getItem('jwt') })
    });
  }
  delete(productId: number): Observable<PaginatedData<Product>> {

    return this.httpClient.delete<PaginatedData<Product>>('http://localhost:12124/Products/' + productId, {
      headers: new HttpHeaders({ Authorization: 'Bearer' + localStorage.getItem('jwt') })
    });
  }
}
