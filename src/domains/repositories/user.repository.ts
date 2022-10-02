import { UserM } from 'src/domains/model/user';

export interface UserRepository {
  getUser(): Promise<UserM[]>;
}
