import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardSchema } from './schemas/board.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'board', schema: BoardSchema }]),
  ],
  controllers: [BoardController],
  providers: [BoardService],
})
export class BoardModule { }
