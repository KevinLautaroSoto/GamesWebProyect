const { Videogames } = require("../../db");

const getGameById = async () => {
    const Game = await Videogames.findByPk(id.toUpperCase());
    return Game;
}

module.exports = getGameById;