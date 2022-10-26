import { Controller, Get, Inject } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetUserUseCases } from 'src/applications/use-cases/getUser.usecases';
import { UseCaseProxy } from 'src/infrastructures/usecase-proxy/usecase-proxy';
import { UsecaseProxyModule } from 'src/infrastructures/usecase-proxy/usecase-proxy.module';
import { UserPresenter } from './user.presenter';

@ApiTags('users')
@Controller('')
export class UserController {
  constructor(
    @Inject(UsecaseProxyModule.GET_USERS_USE_CASE)
    private readonly getUserUsecaseProxy: UseCaseProxy<GetUserUseCases>,
  ) {}

  @Get('users')
  async getUsers() {
    const users = await this.getUserUsecaseProxy.getInstance().execute();
    return users.map((user) => new UserPresenter(user));
  }
}
