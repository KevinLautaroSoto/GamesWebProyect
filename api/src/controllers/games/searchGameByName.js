const axios = require("axios");
const { URL, API_KEY } = process.env;

const searchGameByName = async (name) => {
    const game = await axios.get(`${URL}/games?search=${name}&key=${API_KEY}`);

    return game.data;
};

module.exports = searchGameByName;

