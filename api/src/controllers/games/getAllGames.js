// const { Games } = require("../../db");
const axios = require("axios");
const { URL, API_KEY } = process.env;

const getAllGames = async (pag) => {
  const games = await axios.get(`${URL}/games?page_size=10&page=${pag}&key=${API_KEY}`);
  const APIGames = games.data.results;
  return APIGames; // retorna un array de 10 objetos con cada juego. Tengo que retornar los creados que se almacenan en la base de datos tambien.
};

module.exports = getAllGames;
