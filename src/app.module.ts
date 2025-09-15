import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // твой юзер
      password: 'qwerty', // твой пароль
      database: 'mydb', // имя базы
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // автоматически создает таблицы (только dev!)
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
