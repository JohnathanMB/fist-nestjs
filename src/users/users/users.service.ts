import { Injectable } from '@nestjs/common';
import { Users } from '../../models/users/users';
import { faker } from '@faker-js/faker';

@Injectable()
export class UsersService {
  private users: Array<Users> = [];
  constructor() {
    for (let i = 0; i < 10; i++) {
      this.users.push(
        new Users(faker.person.firstName(), faker.person.lastName()),
      );
    }
  }
  
  getUsers(): Users[] {
    return this.users;
  }
}
