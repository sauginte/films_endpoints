import express from "express";
import {
  ADD_FILM,
  GET_SORTED_FILMS,
  DELETE_FILMS,
  GET_FILMS,
} from "../controllers/film.js";

const router = express.Router();

router.post("/addFilm", ADD_FILM);

router.get("/getSortedFilms", GET_SORTED_FILMS);

router.delete("/deleteFilms", DELETE_FILMS);

router.get("/getFilms", GET_FILMS);

export default router;
