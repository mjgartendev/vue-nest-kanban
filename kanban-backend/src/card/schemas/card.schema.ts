import * as mongoose from 'mongoose';

export const CardSchema = new mongoose.Schema({
  title: String,
  description: String,
  boardID: String,
  todos: Array,
  tags: Array,
  created_at: { type: Date, default: Date.now },
});
