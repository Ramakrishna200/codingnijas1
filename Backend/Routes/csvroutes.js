import express from "express"
import { downloadCSV } from "../controllers/csvcontroller.js";
export const downloadrouter = express.Router();

downloadrouter.get('/download', downloadCSV);


