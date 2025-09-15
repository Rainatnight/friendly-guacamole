import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Разрешаем CORS для фронтенда
  app.enableCors({
    origin: 'http://localhost:3000', // адрес фронтенда
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // если нужны куки
  });

  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
