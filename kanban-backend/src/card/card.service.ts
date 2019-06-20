import { Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Card } from './interfaces/card.interface';
import { CreateCardDTO } from './dto/create-card.dto';

@Injectable()
export class CardService {
    constructor(@InjectModel('card') private readonly cardModel: mongoose.Model<Card>) { }
    async getAllCard(boardID): Promise<Card[]> {
      const cards = await this.cardModel.find().exec();
      cards.filter(c => c.boardID === boardID);
      return cards;
    }
    async getCard(cardID): Promise<Card> {
        const card = await this.cardModel.findById(cardID).exec();
        return card;
    }
    async addCard(createCardDTO: CreateCardDTO): Promise<Card> {
        const newCard = await this.cardModel(createCardDTO);
        return newCard.save();
    }
    async updateCard(cardID, createCardDTO: CreateCardDTO): Promise<Card> {
        const updatedCard = await this.cardModel
            .findByIdAndUpdate(cardID, createCardDTO, { new: true });
        return updatedCard;
    }
    async deleteCard(cardID): Promise<any> {
        const deletedCard = await this.cardModel.findByIdAndRemove(cardID);
        return deletedCard;
    }
}
