import { Injectable } from '@nestjs/common';
import { User } from 'src/domains/users/entities/user';
import { UserRepository } from 'src/domains/users/user.repository';

@Injectable()
export class UsersUseCases {
  constructor(private usersRepository: UserRepository) {}

  async getUsers(): Promise<User> {
    return await this.usersRepository.getUser();
  }
}
