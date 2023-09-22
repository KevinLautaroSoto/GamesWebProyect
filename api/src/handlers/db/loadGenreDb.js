const { Genres } = require("../../db")
const getGenresAPI = require("../../controllers/db/getGenresAPI");

const loadGenreDb = async () => {
    try {
        const genreAPI = await getGenresAPI();
        const loadGenres = await Genres.bulkCreate(genreAPI);
        console.log(loadGenres);

    } catch (error) {
        return {error: error.message};
    }

    //     try {
//     const gamesAPI = await axios.get("https://api.rawg.io/api/games?page_size=10&page=1&key=516e76ac2a2941fa96ce7690d7c7737a");
//     const games = gamesAPI.data.results;

//     console.log(games);
// } catch (error) {
//     return {error: error.message};
// }
};

module.exports = loadGenreDb;

// const loadDb = async (req, res) => {
//         const gamesDb = await Videogame.findAll();

//     if (gamesDb.length > 99) return console.log("database successfully loaded");

//     while () {
        
//     }   
// };