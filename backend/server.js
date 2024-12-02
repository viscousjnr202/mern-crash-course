import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoute from "./routes/products.route.js";
import cors from 'cors'
import path from 'path'
// initial modules
const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

//middeware
app.use(express.json()); //allow to accept JSON data in the req body
app.use(cors())
app.use("/api/products", productRoute);

// Defining functions
const _dirname = path.resolve()

  app.use(express.static(path.join(_dirname, '/frontend/dist')))
  app.get('*', (req, res) =>{
    res.sendFile(path.resolve(_dirname, 'frontend', 'dist', 'index.html'))
  })

// listen to server
app.listen(5000, () => {
  connectDB(process.env.MONGO_URI);
  console.log(`Server is running on http://localhost:${port}`);
});

