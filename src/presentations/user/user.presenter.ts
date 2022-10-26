import { UserM } from 'src/domains/model/user';

export class UserPresenter {
  id: number;
  fullname: string;
  username: string;
  password: string;
  created_at: Date;
  updated_at: Date;

  constructor(user: UserM) {
    this.id = user.id;
    this.fullname = user.fullname;
    this.username = user.username;
    this.password = user.password;
    this.created_at = user.created_at;
    this.updated_at = user.updated_at;
  }
}
