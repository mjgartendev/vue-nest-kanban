import { Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Board } from './interfaces/board.interface';
import { Card } from '../card/interfaces/card.interface';
import { CreateBoardDTO } from './dto/create-board.dto';

@Injectable()
export class BoardService {
    constructor(@InjectModel('board') private readonly boardModel: mongoose.Model<Board>) { }
    async getAllBoard(): Promise<Board[]> {
        const boards = await this.boardModel.find().exec();
        return boards;
    }
    async getBoard(boardID): Promise<Board> {
        const board = await this.boardModel.findById(boardID).exec();
        return board;
    }
    async addBoard(createBoardDTO: CreateBoardDTO): Promise<Board> {
        const newBoard = await this.boardModel(createBoardDTO);
        return newBoard.save();
    }
    async updateBoard(boardID, createBoardDTO: CreateBoardDTO): Promise<Board> {
        const updatedBoard = await this.boardModel
            .findByIdAndUpdate(boardID, createBoardDTO, { new: true });
        return updatedBoard;
    }
    async deleteBoard(boardID): Promise<any> {
        const deletedBoard = await this.boardModel.findByIdAndRemove(boardID);
        return deletedBoard;
    }
}
