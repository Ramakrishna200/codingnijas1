import express from "express";
import cors from "cors";
import { userrouter } from "./Routes/userroutes.js";
import { studentrouter } from "./Routes/studentroutes.js";
import { Interviewrouter } from "./Routes/interviewroutes.js";
import connectDB from "./config.js";
import { downloadrouter } from "./Routes/csvroutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// CORS options
const allowedOrigins = ['http://localhost:3000', 'https://serene-alfajores-5e08c1.netlify.app'];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200
};

// Middleware to enable CORS with options
app.use(cors(corsOptions));

// Routes
app.use('/api/users', userrouter);
app.use('/api/students', studentrouter);
app.use('/api/interviews', Interviewrouter);
app.use('/api/csv', downloadrouter);

// MongoDB connection
connectDB();

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
