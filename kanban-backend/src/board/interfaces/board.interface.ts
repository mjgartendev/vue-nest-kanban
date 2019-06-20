import { Document } from 'mongoose';
import { Card } from '../../card/interfaces/card.interface';

export interface Board extends Document {
  readonly title: string;
  readonly description: string;
  readonly cards: Card[];
  readonly created_at: Date;
}
