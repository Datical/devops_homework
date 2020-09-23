import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const PORT = process.env.BE_PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api/v1');
  await app.listen(PORT);
}
bootstrap();
