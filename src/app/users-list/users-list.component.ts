import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pagination } from '../models/Paginations';
import { UserDto } from '../models/UserDto';
import { UsersService } from '../UsersService/users.service';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent{

  page: number = 1;
  rowsPerPage: number = 5;
  users: UserDto[];


  constructor(private usersService: UsersService, private router: Router, private jwtHelper: JwtHelperService) {
    this.refresh();
  }

  refresh(): void {
    let pagination = new Pagination();
    pagination.page = this.page;
    pagination.rowsPerPage = this.rowsPerPage;
    console.log("jestem");
    this.usersService.get(pagination).subscribe(response => this.users = response.data, err => {
      this.router.navigateByUrl('products');
    });

  }
  DeleteUsersClick(event: UserDto): void {
    alert(event.id);
    this.usersService.delete(event.id).subscribe(response => this.users = response.data);
  }
  addProduct(): void {
    this.router.navigateByUrl('usersAdd');
  }
  isUserAuthenticated() {
    const token: string = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    return false;
  }
}
