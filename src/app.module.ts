import { HttpExceptionFilter } from './common/exceptions/http-exception.filter';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, ConfigModule.forRoot(), AuthModule],
  controllers: [AppController],
  providers: [
    AppService,
    // 전역적으로 종속 주입을 위한 provider
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
