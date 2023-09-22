const getAllGames = require("../../controllers/games/getAllGames");
const searchGameByName = require("../../controllers/games/searchGameByName");

const getGamesHandler = async (req, res) => {
    const { name, pag } = req.query;
    
    try {
        const games = name ? await searchGameByName(name) : await getAllGames(pag);
        res.status(200).json(games);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = getGamesHandler;