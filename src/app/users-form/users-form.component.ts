import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostUserDto } from '../models/PostUser';
import { PostUserDtoPasswd } from '../models/PostUserDtoPasswd';
import { User } from '../models/User';
import { UserDto } from '../models/UserDto';
import { UsersService } from '../UsersService/users.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

  user: PostUserDtoPasswd;
  private usertId: number;
  constructor(private activatedRoute: ActivatedRoute, private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res => {
      this.usertId = res['id'];
      this.userService.getById(res['id']).subscribe(res2 => {
        if (res2 == null) {
          this.router.navigateByUrl('users');
        } else {
          this.user = new PostUserDtoPasswd(res2);
        }
          
      }
      );

    });
  }

  onSubmit(data): void {
    this.userService.put(this.usertId, data).subscribe(res => {
      this.router.navigateByUrl('users');
    }, (error) => console.log(error));
  }
  anuluj(): void {
    this.router.navigateByUrl('users');
  }
}
