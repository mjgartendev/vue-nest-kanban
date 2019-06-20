import { Module } from '@nestjs/common';
import { CardController } from './card.controller';
import { CardService } from './card.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CardSchema } from './schemas/card.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'card', schema: CardSchema }]),
  ],
  controllers: [CardController],
  providers: [CardService],
})
export class CardModule { }
