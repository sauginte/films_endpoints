import express from "express";
import {
  ADD_FILM,
  GET_FILM_BY_ID,
  DELETE_FILMS,
  GET_FILMS,
  UPDATE_FILM_BY_ID,
} from "../controllers/film.js";

const router = express.Router();

router.post("/films", ADD_FILM);

router.get("/films/:id", GET_FILM_BY_ID);

router.delete("/films/:id", DELETE_FILMS);

router.get("/films", GET_FILMS);

router.put("/films/:id", UPDATE_FILM_BY_ID);

export default router;
