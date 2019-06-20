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
  Req,
} from '@nestjs/common';
import { CardService } from './card.service';
import { CreateCardDTO } from './dto/create-card.dto';

@Controller('card')
export class CardController {
  constructor(private cardService: CardService) {}

  // add a card
  @Post('/create')
  async addCard(@Res() res, @Body() createCardDTO: CreateCardDTO) {
    const card = await this.cardService.addCard(createCardDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Card has been created successfully',
      card,
    });
  }
  @Get('cards/:boardID')
  async getAllCard(@Res() res, @Param('boardID') boardID) {
    const cards = await this.cardService.getAllCard(boardID);
    return res.status(HttpStatus.OK).json(cards);  }
  // @Get()
  // async getAllCard(@Res() res, @Param('boardID') boardID) {
  //   const cards = await this.cardService.getAllCard(boardID);
  //   if (!cards) {
  //     throw new NotFoundException('Cards not found!');
  //   }
  //   return res.status(HttpStatus.OK).json(cards);
  // }

  @Get('card/:cardID')
  async getCard(@Res() res, @Param('cardID') cardID) {
    const card = await this.cardService.getCard(cardID);
    if (!card) {
      throw new NotFoundException('Card does not exist!');
    }
    return res.status(HttpStatus.OK).json(card);
  }

  @Put('/update')
  async updateCard(
    @Res() res,
    @Query('cardID') cardID,
    @Body() createCardDTO: CreateCardDTO,
  ) {
    const card = await this.cardService.updateCard(cardID, createCardDTO);
    if (!card) {
      throw new NotFoundException('Card does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Card has been successfully updated',
      card,
    });
  }

  @Delete('/delete')
  async deleteCard(@Res() res, @Query('cardId') cardId) {
    const card = await this.cardService.deleteCard(cardId);
    if (!card) {
      throw new NotFoundException('Card does not exist');
    }
    return res.status(HttpStatus.OK).json({
      message: 'card has been deleted',
      card,
    });
  }
}
