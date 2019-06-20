import * as mongoose from 'mongoose';

export const BoardSchema = new mongoose.Schema({
  title: String,
  description: String,
  created_at: { type: Date, default: Date.now },
});
