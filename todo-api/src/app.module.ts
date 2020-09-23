import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { ToDosController } from './to-dos/to-dos.controller';
import { ToDosService } from './to-dos/to-dos.service';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [
    AppController,
    ToDosController,
  ],
  providers: [
    ToDosService
  ],
})
export class AppModule { }
