import express from "express";
import cors from "cors";
import config from "./config";
import ingredientRoute from "./routes/ingredient";
import foodie from "./routes/foodie";

const app = express();

// Configuration
app.set("port", config.port);
const {Client} = require('pg');
const pool = new Client();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(ingredientRoute);
app.use(foodie);

export default app;
