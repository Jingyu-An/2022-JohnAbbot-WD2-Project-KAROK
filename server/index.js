
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import AuthRoute from './Routes/AuthRoute.js'
import UserRoute from "./Routes/UserRoute.js";
import PostRoute from "./Routes/PostRoute.js";

dotenv.config();


// Routes
const app = express();


// Middleware
app.use(express.json()); // Allows express to read a request body
// Configuring body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose
    .connect(process.env.MONGO_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(process.env.PORT, () =>
            console.log(`Listening at ${process.env.PORT}`)
        )
    )
    .catch((error) => console.log(error));


// usage of routes
app.use('/auth', AuthRoute)
app.use('/user',UserRoute)
app.use('/post', PostRoute)