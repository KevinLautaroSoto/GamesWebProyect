// En getGenreHandler.js o en los controladores relacionados
const getGenreController = require("../../controllers/genres/getGenreController");

const getGenreHandler = async (req, res) => {
    try {
        const genres = await getGenreController();
        res.status(200).json(genres);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getGenreHandler;

