import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardModule } from './board/board.module';
import { CardModule } from './card/card.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/kanban', { useNewUrlParser: true }),
    BoardModule,
    CardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
