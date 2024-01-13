import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/User';
import { UsersService } from '../UsersService/users.service';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit {

  product: User;
  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit(data): void {
    this.usersService.post(data).subscribe(res => {
      this.router.navigateByUrl('users');

    }, (error) => console.log(error));
  }
  anuluj(): void {
    this.router.navigateByUrl('users');
  }

}
