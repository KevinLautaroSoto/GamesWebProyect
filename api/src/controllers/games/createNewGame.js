const { Videogame } = require("../../db");
// const { conn } = require('../../db');
// const {QueryTypes} = require("sequelize");

const createNewGame = async (name, description, platform, image, releaseDate, rating) => {
    // const maxId =  await conn.query(
    //     'SELECT max(id) AS id FROM "videogames"',
    //     {
    //         type: QueryTypes.SELECT
    //     }
    // )
    // const id = maxId[0].id + 0;

    const newGame = await Videogame.create({
        name, description, platform, image, releaseDate, rating
    });
    return newGame;
};

module.exports = createNewGame;



// {
//     "name": "el jueguito",
//     "description": "esto es un jueguito",
//     "platform": "PlayStation 4",
//     "image": "una url cualquiera",
//     "releaseDate": "2023-09-21",
//     "rating": 3
// }