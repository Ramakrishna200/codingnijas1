import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  college: { type: String, required: true },
  status: { type: String, enum: ['placed', 'not_placed'], required: true },
  dsaScore: { type: Number, required: true },
  webdScore: { type: Number, required: true },
  reactScore: { type: Number, required: true },
});

export const Student = mongoose.model('Student', studentSchema);
