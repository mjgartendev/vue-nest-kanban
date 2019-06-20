import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Post,
  Body,
  Put,
  Query,
  NotFoundException,
  Delete,
  Param,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDTO } from './dto/create-board.dto';

@Controller('board')
export class BoardController {
  constructor(private boardService: BoardService) {}

  // add a board
  @Post('/create')
  async addBoard(@Res() res, @Body() createBoardDTO: CreateBoardDTO) {
    const board = await this.boardService.addBoard(createBoardDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Board has been created successfully',
      board,
    });
  }

  @Get('boards')
  async getAllBoard(@Res() res) {
    const boards = await this.boardService.getAllBoard();
    return res.status(HttpStatus.OK).json(boards);
  }

  @Get('board/:boardID')
  async getBoard(@Res() res, @Param('boardID') boardID) {
    const board = await this.boardService.getBoard(boardID);
    if (!board) {
      throw new NotFoundException('Board does not exist!');
    }
    return res.status(HttpStatus.OK).json(board);
  }

  @Put('/update')
  async updateBoard(
    @Res() res,
    @Query('boardID') boardID,
    @Body() createBoardDTO: CreateBoardDTO,
  ) {
    const board = await this.boardService.updateBoard(boardID, createBoardDTO);
    if (!board) {
      throw new NotFoundException('Board does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Board has been successfully updated',
      board,
    });
  }

  @Delete('/delete')
  async deleteBoard(@Res() res, @Query('boardId') boardId) {
    const board = await this.boardService.deleteBoard(boardId);
    if (!board) {
      throw new NotFoundException('Board does not exist');
    }
    return res.status(HttpStatus.OK).json({
      message: 'board has been deleted',
      board,
    });
  }
}
