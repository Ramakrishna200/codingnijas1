import express from "express"
import { registerUser,authUser } from "../controllers/usercontroller.js";
export const userrouter = express.Router();

userrouter.post('/register', registerUser);
userrouter.post('/login', authUser);

