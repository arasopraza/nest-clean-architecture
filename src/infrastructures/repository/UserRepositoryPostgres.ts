import { User } from 'src/domains/users/entities/user';
import { UserRepository } from 'src/domains/users/user.repository';

export class UserRepositoryPostgres extends UserRepository {
  getUser(): Promise<User> {
    throw new Error('Method not implemented.');
  }
}
