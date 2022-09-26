import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infrastructures/config/environment-config/environment-config.module';
import { UsecaseProxyModule } from './infrastructures/usecase-proxy/usecase-proxy.module';
import { UserModule } from './presentations/user/user.module';

@Module({
  imports: [UsecaseProxyModule.register(), UserModule, EnvironmentConfigModule],
})
export class AppModule {}
