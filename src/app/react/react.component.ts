import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User, UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.scss'],
})
export class ReactComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(null),
    email: new FormControl(''),
  });

  errorName: boolean = false;
  errorAge: boolean = false;
  errorEmail: boolean = false;

  tmp: number = 0;
  serError(value: any) {
    if (Boolean(value) === false) {
      return true;
    } else {
      return false;
    }
  }

  onSubmit() {
    this.errorName = this.serError(this.userForm.value.name);
    this.errorAge = this.serError(this.userForm.value.age);
    this.errorEmail = this.serError(this.userForm.value.email);
    if (this.errorName || this.errorAge || this.errorEmail) {
      return;
    } else {
      const currentUser: User = {
        name: this.userForm.value.name,
        age: this.userForm.value.age,
        email: this.userForm.value.email,
      };
      this.userService.users.push(currentUser);
      this.userForm.reset();
    }
  }

  constructor(private userService: UserDataService) {}

  ngOnInit(): void {}
}
