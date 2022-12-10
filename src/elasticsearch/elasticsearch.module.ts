import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    AuthModule, 
    TodoModule, 
    UserModule
  ],
})
export class ElasticSearchModule {}