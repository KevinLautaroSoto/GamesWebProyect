const { Videogame } = require("../../db")
const axios = require ("axios");
const { URL } = process.env;

const tryAPI = async (req, res) => {
    try {
    const gamesAPI = await axios.get(`${URL}`);
    const games = gamesAPI.data.results;

    console.log(games);
} catch (error) {
    console.log("error al recibir informacion de la api");
}
};

module.exports = tryAPI;

// const loadDb = async (req, res) => {
//         const gamesDb = await Videogame.findAll();

//     if (gamesDb.length > 99) return console.log("database successfully loaded");

//     while () {
        
//     }   
// };