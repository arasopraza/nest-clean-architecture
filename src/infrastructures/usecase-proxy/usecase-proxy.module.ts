import { DynamicModule, Module } from '@nestjs/common';
import { GetUserUseCases } from 'src/applications/use-cases/getUser.usecases';
import { RepositoriesModule } from 'src/infrastructures/repositories/repositories.module';
import { UserRepositoryOrm } from 'src/infrastructures/repositories/user.repository';
import { EnvironmentConfigModule } from '../config/environment-config/environment-config.module';
import { UseCaseProxy } from './usecase-proxy';

@Module({
  imports: [EnvironmentConfigModule, RepositoriesModule],
})
export class UsecaseProxyModule {
  static GET_USERS_USE_CASE = 'getUsersUsecaseProxy';

  static register(): DynamicModule {
    return {
      module: UsecaseProxyModule,
      providers: [
        {
          inject: [UserRepositoryOrm],
          provide: UsecaseProxyModule.GET_USERS_USE_CASE,
          useFactory: (userRepository: UserRepositoryOrm) =>
            new UseCaseProxy(new GetUserUseCases(userRepository)),
        },
      ],
      exports: [UsecaseProxyModule.GET_USERS_USE_CASE],
    };
  }
}
