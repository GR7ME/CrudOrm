import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './ormconfig';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal:true
  }),TypeOrmModule.forRoot(config),PostModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
