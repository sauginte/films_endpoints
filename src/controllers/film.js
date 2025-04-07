let films = [
  {
    id: "1",
    title: "Squid Game",
    rating: 8.0,
    description:
      "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes: a survival game that has a whopping 45.6 billion-won prize at stake.",
    imdbLink: "https://www.imdb.com/title/tt10919420/",
  },
  {
    id: "2",
    title: "Chernobyl",
    rating: 9.3,
    description:
      "In April 1986, the city of Chernobyl in the Soviet Union suffers one of the worst nuclear disasters in the history of mankind. Consequently, many heroes put their lives on the line in the following days, weeks and months.",
    imdbLink:
      "https://www.imdb.com/title/tt7366338/?ref_=hm_tpks_i_2_pd_tp1_pbr_ic",
  },
  {
    id: "3",
    title: "House",
    rating: 8.3,
    description:
      "Using a crack team of doctors and his wits, an antisocial maverick doctor specializing in diagnostic medicine does whatever it takes to solve puzzling cases that come his way.",
    imdbLink: "https://www.imdb.com/title/tt0412142/?ref_=hm_stp_i_12_pvs_piv",
  },
];

const ADD_FILM = (req, res) => {
  const id = req.body.id;

  const existingId = films.filter((i) => i.id === id);

  if (existingId.length > 0) {
    return res
      .status(404)
      .json({ message: "Film with this ID already exists" });
  }

  const film = {
    id: req.body.id,
    title: req.body.title,
    rating: req.body.rating,
    description: req.body.description,
    imdbLink: req.body.imdbLink,
  };

  films.push(film);

  console.log(film);

  return res.status(201).json({
    film: film,
  });
};

const GET_SORTED_FILMS = (req, res) => {
  if (films.length === 0) {
    return res.status(200).json({
      message: "Data not exists",
    });
  }
  films.sort((a, b) => (a.rating < b.rating ? 1 : -1));
  return res.status(200).json({
    films: films,
  });
};

const DELETE_FILMS = (req, res) => {
  films = [];
  return res.status(200).json({ message: "Films was removed" });
};

const GET_FILMS = (req, res) => {
  if (films.length === 0) {
    return res.status(200).json({
      message: "Data not exists",
    });
  }
  return res.status(200).json({
    films: films,
  });
};

export { ADD_FILM, GET_SORTED_FILMS, DELETE_FILMS, GET_FILMS };
