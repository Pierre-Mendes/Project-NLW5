import express from "express";
import "./database"
import {routes} from 

const app = express();

app.use(routes);

app.listen(3333, () => console.log(" Server is running on port 3333 "));