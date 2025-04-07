import express from "express";
import cors from "cors";
import tasksRouter from "./src/routes/film.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(tasksRouter);

// jeigu endpointas neegzistuoja -  išvedamas pranešimas
app.use((req, res) => {
  return res.status(404).json({ message: "Endpoint does not exist" });
});

// kai paleidžiama aplikacija, suveikia anoniminė funkcija, kuris išveda console log'ą, kad aplinkacija paleista
app.listen(3000, () => {
  console.log("app started");
});
