import { Component, Input, OnInit } from '@angular/core';
import { User, UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input() user: User;

  constructor(private userService: UserDataService) {}
  users: User[] = this.userService.users;
  ngOnInit(): void {}
}
