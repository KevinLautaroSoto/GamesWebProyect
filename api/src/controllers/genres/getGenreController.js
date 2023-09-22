const { Genre } = require("../../db");

const getGenreController = async () => {
    const genre = await Genre.findAll();

    return genre;
};

module.exports = getGenreController;