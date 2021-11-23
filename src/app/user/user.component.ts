import { Component, Input, OnInit } from '@angular/core';
import { User } from '../services/user-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() user: User;
  date: Date = new Date();

  constructor() {}

  ngOnInit(): void {}
}
