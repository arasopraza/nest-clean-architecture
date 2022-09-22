import { Module } from '@nestjs/common';
import { OrderModule } from './interfaces/order/order.module';
import { UserModule } from './interfaces/user/user.module';

@Module({
  imports: [UserModule, OrderModule],
})
export class AppModule {}
