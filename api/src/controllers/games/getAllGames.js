  const axios = require("axios");
  const { URL, API_KEY } = process.env;

  const getAllGames = async (pag) => {
    const games = await axios.get(`${URL}/games?page_size=15&page=${pag}&key=${API_KEY}`);
    const APIGames = games.data.results;
    // console.log(APIGames);
    const gamesMaped = APIGames.map(game => { return {
      id: game.id,
      name: game.name,
      platform: game.platforms.map((p) => {
        return p.platform.name
      }),
      image: game.background_image,
      releaseDate: game.released,
      genre: game.genres.map((m) => {
        return m.name
      })
    }})

    return gamesMaped;
    // retorna un array de 10 objetos con cada juego. Tengo que retornar los creados que se almacenan en la base de datos tambien.
  };

  module.exports = getAllGames;
