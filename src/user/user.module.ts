import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // IMPORTANT for AuthModule to use it
})
export class UserModule {}

export { UserService };
