import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING),
    ConfigModule.forRoot({
      envFilePath: '.env.development',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
