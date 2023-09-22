const createNewGame = require("../../controllers/games/createNewGame");

const postGamesHandler = async (req, res) => {
    const { name, description, platform, image, releaseDate, rating } = req.body;

    try {
        const newGame = await createNewGame(name, description, platform, image, releaseDate, rating);
        res.status(201).json(newGame);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

module.exports = postGamesHandler;