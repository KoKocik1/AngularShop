import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UserDto } from '../models/UserDto';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit(): void {
  }
  @Input() data: UserDto;


  onEdytujClick(): void {
    this.router.navigateByUrl("users/" + this.data.id);
  }

  @Output('deleteUsersClick') onDeleteeClick: EventEmitter<UserDto> = new EventEmitter<UserDto>();

  onDeleteClick(): void {
    this.onDeleteeClick.emit(this.data);
  }
}
