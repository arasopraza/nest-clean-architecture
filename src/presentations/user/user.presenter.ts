import { UserM } from 'src/domains/model/user';

export class UserPresenter {
  id: number;
  username: string;
  password: string;
  create_date: Date;
  updated_date: Date;

  constructor(user: UserM) {
    this.id = user.id;
    this.username = user.username;
    this.password = user.password;
    this.create_date = user.create_date;
    this.updated_date = user.updated_date;
  }
}
