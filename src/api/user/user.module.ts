import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IUserRepository } from 'src/core/domain/interfaces/iuser.repository';
import { UserService } from 'src/core/domain/services/user.service';
import {
  Users,
  UserSchema,
} from 'src/core/infrastructure/repositories/mongoose/schemas/user.schema';
import { UserMongooseRepository } from 'src/core/infrastructure/repositories/mongoose/user.mongoose.repository';
import { UserController } from './user.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Users.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [
    UserMongooseRepository,
    {
      provide: UserService,
      useFactory: (userRepo: IUserRepository) => new UserService(userRepo),
      inject: [UserMongooseRepository],
    },
  ],
})
export class UserModule {}
