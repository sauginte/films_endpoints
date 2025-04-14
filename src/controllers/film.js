import FilmModel from "../modules/film.js";
import { v4 as uuidv4 } from "uuid";

const ADD_FILM = async (req, res) => {
  try {
    const film = new FilmModel({
      id: uuidv4(),
      title: req.body.title,
      rating: req.body.rating,
      description: req.body.description,
      imdbLink: req.body.imdbLink,
    });

    const response = await film.save();

    return res.status(201).json({
      film: response,
    });
  } catch (err) {
    return res.status(400).json({
      message: "App does not working",
    });
  }
};

const GET_FILM_BY_ID = async (req, res) => {
  try {
    const response = await FilmModel.findOne({ id: req.params.id });

    if (!response) {
      return res.status(404).json({
        message: "Film with this ID does not exist",
      });
    }

    return res.status(200).json({
      film: response,
    });
  } catch (err) {
    return res.status(400).json({
      message: "App does not working",
    });
  }
};

const DELETE_FILMS = (req, res) => {
  try {
    return res.status(200).json({ message: "All films was removed" });
  } catch (err) {
    return res.status(400).json({
      message: "App does not working",
    });
  }
};

const GET_FILMS = async (req, res) => {
  try {
    const response = await FilmModel.find();
    return res.status(200).json({
      films: response,
    });
  } catch (err) {
    return res.status(400).json({
      message: "App does not working",
    });
  }
};

const UPDATE_FILM_BY_ID = async (req, res) => {
  try {
    // findOneAndUpdate laužtiniuose skliaustuose nurodoma pagal ką norim grąžinti duomenis
    const response = await FilmModel.findOneAndUpdate(
      // pagal ką ieškoma:
      {
        id: req.params.id,
      },
      // kas update'inama (išspreadinamas body):
      {
        ...req.body,
      },
      {
        new: true,
      }
    );
    return res.status(200).json({
      film: response,
      message: "Film data was updated",
    });
  } catch (err) {
    return res.status(400).json({
      message: "App does not working",
    });
  }
};

export { ADD_FILM, GET_FILM_BY_ID, DELETE_FILMS, GET_FILMS, UPDATE_FILM_BY_ID };
