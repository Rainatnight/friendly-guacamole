import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [{ id: 1, name: 'John' }];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((u) => u.id === id);
  }

  create(name: string) {
    const newUser = { id: Date.now(), name };
    this.users.push(newUser);
    return newUser;
  }
}
