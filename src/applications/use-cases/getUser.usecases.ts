import { UserM } from 'src/domains/model/user';
import { UserRepositoryOrm } from 'src/infrastructures/repositories/user.repository';

export class GetUserUseCases {
  constructor(private usersRepository: UserRepositoryOrm) {}

  async execute(): Promise<UserM[]> {
    return await this.usersRepository.getUser();
  }
}
