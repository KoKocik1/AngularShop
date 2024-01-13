import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatedData } from '../models/PaginatedData';
import { Pagination } from '../models/Paginations';
import { PostUserDto } from '../models/PostUser';
import { PostUserDtoPasswd } from '../models/PostUserDtoPasswd';
import { User } from '../models/User';
import { UserDto } from '../models/UserDto';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {
  }

  getById(id: number): Observable<UserDto> {
    return this.httpClient.get<UserDto>('http://localhost:12124/Users/' + id, {
      headers: new HttpHeaders({ Authorization: 'Bearer' + localStorage.getItem('jwt') })
    });
  }

  get(pagination?: Pagination): Observable<PaginatedData<UserDto>> {
    if (pagination == null) {
      pagination = new Pagination();
      pagination.page = 1;
      pagination.rowsPerPage = 5;
      pagination.sortColumn = "name";
      pagination.sortAscending = false;
    }
    pagination.sortColumn = "name";
    pagination.sortAscending = false;

    return this.httpClient.get<PaginatedData<UserDto>>('http://localhost:12124/Users?' +
      'page=' + pagination.page +
      '&rowsPerPage=' + pagination.rowsPerPage +
      '&sortAscending=' + pagination.sortAscending +
      '&sortColumn=' + pagination.sortColumn, {
      headers: new HttpHeaders({ Authorization: 'Bearer' + localStorage.getItem('jwt') })
    });
  }
  put(userId: number, dto: PostUserDtoPasswd): Observable<UserDto> {

    return this.httpClient.put<UserDto>('http://localhost:12124/Users/' + userId, dto, {
      headers: new HttpHeaders({ Authorization: 'Bearer' + localStorage.getItem('jwt') })
    });
  }
  post(dto: PostUserDto): Observable<UserDto> {
    return this.httpClient.post<UserDto>('http://localhost:12124/Users/', dto, {
      headers: new HttpHeaders({ Authorization: 'Bearer' + localStorage.getItem('jwt') })
    });
  }
  delete(userId: number): Observable<PaginatedData<UserDto>> {

    return this.httpClient.delete<PaginatedData<UserDto>>('http://localhost:12124/Users/' + userId, {
      headers: new HttpHeaders({ Authorization: 'Bearer' + localStorage.getItem('jwt') })
    });
  }
}
