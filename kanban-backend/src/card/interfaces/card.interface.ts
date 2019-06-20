import { Document } from 'mongoose';

export interface Card extends Document {
  readonly title: string;
  readonly description: string;
  readonly boardID: string;
  readonly tags: string[];
  readonly todos: string[];
  readonly created_at: Date;
}
