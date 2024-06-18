import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  date: { type: Date, required: true },
  students: [
    {
      student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
      },
      result: {
        type: String,
        enum: ['PASS', 'FAIL', 'On Hold', "Didn't Attempt"],
      },
    },
  ],
});

export  const Interview  = mongoose.model('Interview', interviewSchema);
