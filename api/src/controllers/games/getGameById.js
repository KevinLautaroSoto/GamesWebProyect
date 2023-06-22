const { Games } = require("../db");

const getGameById = async () => {
    const Game = await Games.findByPk(id.toUpperCase());
    return Game;
}

module.exports = getGameById;