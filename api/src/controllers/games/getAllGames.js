const { Games } = require("../../db");

const getAllGames = async () => {
    const allGames = await Games.findAll();
    return allGames;
};

module.exports = getAllGames;