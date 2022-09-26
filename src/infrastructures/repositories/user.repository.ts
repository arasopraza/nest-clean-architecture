import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserM } from 'src/domains/model/user';
import { UserRepositroy } from 'src/domains/repositories/user.repository';
import { User } from '../entities/user.entity';

@Injectable()
export class UserRepositoryOrm implements UserRepositroy {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getUser(): Promise<UserM[]> {
    const users = await this.userRepository.find();
    return users.map((user) => this.toUser(user));
  }

  private toUser(userEntity: User): UserM {
    const user: UserM = new UserM();

    user.id = userEntity.id;
    user.username = userEntity.username;
    user.password = userEntity.password;
    user.create_date = userEntity.create_date;
    user.updated_date = userEntity.updated_date;

    return user;
  }
}
