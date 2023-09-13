import express, { json } from "express";
import musicRouter from "./routers/music-router";

const app = express();

app.use(json());
app.use(musicRouter);

const port = 5003;

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
})
