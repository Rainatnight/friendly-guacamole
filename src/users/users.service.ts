import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  findAll() {
    return this.usersRepo.find();
  }
  findOne(id: number): Promise<User | null> {
    return this.usersRepo.findOne({ where: { id } });
  }

  create(name: string, email: string) {
    const user = this.usersRepo.create({ name, email });
    return this.usersRepo.save(user);
  }
}
