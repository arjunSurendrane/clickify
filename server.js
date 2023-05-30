import express, { urlencoded } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import { connectedToDb } from "./config/db.js";
import { connectedToLocalhost } from "./config/server.js";
import { errorHandling } from "./middleware/errorHandling.js";
import apiRoute from "./route/api.js";
import userRoute from "./route/user.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT;
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

/**
 * Connect to db
 */
connectedToDb();

/**
 * connect to localhost
 */
connectedToLocalhost(app);

/**
 * Set up view engine
 */
app.set("view engine", "ejs");

/**
 * Route config
 */
app.use("/api/v1/", apiRoute);
app.use("/", userRoute);

/**
 * global error handling middleware
 */
app.use(errorHandling);
