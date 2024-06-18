import express from "express"
import { addInterview,allocateStudentToInterview,getInterviews,updateInterviewResult } from '../controllers/interview controller.js';
export const Interviewrouter = express.Router();

Interviewrouter.post('/add', addInterview);
Interviewrouter.get('/', getInterviews);
Interviewrouter.post('/allocate', allocateStudentToInterview);
Interviewrouter.put('/result', updateInterviewResult);

