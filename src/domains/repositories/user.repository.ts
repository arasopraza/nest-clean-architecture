import { UserM } from 'src/domains/model/user';

export interface UserRepositroy {
  getUser(): Promise<UserM[]>;
}
