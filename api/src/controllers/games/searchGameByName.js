// const { Videogames } = require("../../db");
const axios = require("axios");
const { URL, API_KEY } = process.env;

const searchGameByName = async (name) => {
    const game = await axios.get(`${URL}/games?search=${name}&key=${API_KEY}`);
        const gameByName = game.data;
        return gameByName;
    
    // const gameByName = await Videogames.findAll({
    //     where: Sequelize.where(Sequelize.fn('UPPER', Sequelize.col('name')), 'LIKE', `%${name.toUpperCase()}%`)//*1
    // });
    // return gameByName;
    // retorna al videojuego buscado si esta en la base de datos y no en la API

};

module.exports = searchGameByName;

