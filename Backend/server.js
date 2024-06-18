import express from "express"

// import bodyParser from 'bodyParser';
import { userrouter } from "./Routes/userroutes.js";
import { studentrouter } from "./Routes/studentroutes.js";
import { Interviewrouter } from "./Routes/interviewroutes.js";
import connectDB from "./config.js"



import { downloadrouter } from "./Routes/csvroutes.js";
import cors from "cors"



const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200
};


// Middleware to enable CORS with options
app.use(cors(corsOptions));

// Middleware
// app.use(bodyParser.json());

// // Routes
 app.use('/api/users', userrouter);
app.use('/api/students', studentrouter);
app.use('/api/interviews',Interviewrouter);

app.use('/api/csv', downloadrouter);

// MongoDB connection


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB()
  

});
