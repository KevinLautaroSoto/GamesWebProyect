import { GET_GAMES } from "../actions/actions";

const initialState = {
    games: [],
    allGames: [],
    gender: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GAMES:
            return {
                ...state,
                games: action.payload,
                allGames:action.payload
            };
        default:
            return { ...state};
    };
};

export default rootReducer;
