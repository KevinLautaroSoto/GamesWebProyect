import axios from "axios";

export const GET_GAMES = "GET_GAMES";

export const getGames = (pag) => {
    return async function (dispatch) {
        const apiGames = await axios.get(`http://localhost:3001/videogames?pag=${pag}`);
        const games = apiGames.data;
        dispatch({ type: GET_GAMES, payload: games });
    }
};