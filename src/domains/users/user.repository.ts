import { User } from './entities/user';

export abstract class UserRepository {
  abstract getUser(): Promise<User>;
}
