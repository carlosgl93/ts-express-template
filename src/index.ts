import express from "express";
import firstRouter from "./routes/firstRoute";

const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.use("/api/firstService", firstRouter);

app.listen(PORT, () => {
  console.log(`SERVER LISTENNING ON PORT ${PORT}`);
});
