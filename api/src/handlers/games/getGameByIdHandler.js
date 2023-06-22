const { getGameById} = require("../../controllers/games/getGameById");

const getGameByIdHandler = async (req, res) => {
    const { id } = req.query;
    try {
        let games = await getGameById(id);
        res.status(200).json(games) 
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

module.exports = getGameByIdHandler;