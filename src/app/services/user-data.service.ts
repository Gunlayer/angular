import { Injectable } from '@angular/core';

export interface User {
  name: string;
  age: number;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class UserDataService {
  users: User[] = [];
}
