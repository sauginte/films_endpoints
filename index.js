import "dotenv/config";
import express from "express";
import cors from "cors";
import tasksRouter from "./src/routes/film.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("Connected to database!"))
  .catch((err) => {
    console.log(err);
  });

app.use(tasksRouter);

// jeigu endpointas neegzistuoja -  išvedamas pranešimas
app.use((req, res) => {
  return res.status(404).json({ message: "Endpoint does not exist" });
});

// kai paleidžiama aplikacija, suveikia anoniminė funkcija, kuris išveda console log'ą, kad aplinkacija paleista
app.listen(3000, () => {
  console.log("app started");
});
