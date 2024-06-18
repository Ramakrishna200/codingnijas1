import express from "express"
import { addStudent,getStudents } from "../controllers/studentcontroller.js";
export const studentrouter = express.Router();

studentrouter.post('/add', addStudent);
studentrouter.get('/', getStudents);


