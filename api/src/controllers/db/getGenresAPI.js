const axios = require ("axios");
const {Genre} = require ("../../db.js");
const { URL, API_KEY } = process.env;

const getGenresAPI = async() => {
    try {    
    const genreDB = await Genre.findAll()
    if(genreDB.length > 10) return console.log("Database successfully loaded")
    
        // const genreAPI = await axios.get(`${URL}/genres?key=${API_KEY}`);
        await axios.get(`${URL}/genres?key=${API_KEY}`)
            .then(response => {
                const genreAPI = response.data.results.map(mapGenreFromAPI)
                Genre.bulkCreate(genreAPI)
            })

        console.log("Database successfully loaded");
    } catch (error) {
        return {error: error.message};
    }
};

const mapGenreFromAPI = (genre) => {
    const mapped = {
        id: genre.id,
        nombre: genre.name
    };

    return mapped;
}

module.exports = getGenresAPI;