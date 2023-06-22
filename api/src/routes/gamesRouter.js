const { Router } = require('express');
const {getGamesHandler} = require("../handlers/games/getGamesHandler");
const {getGameByIdHandler} = require("../handlers/games/getGameByIdHandler");
const { API_KEY } = process.env;

const gamesRouter = Router();

gamesRouter.get("/", (req, res) => {
    const urlWithApiKey= `${req.baseUrl}?api_key=${API_KEY}`;
    req.originalUrl = urlWithApiKey;
    getGamesHandler(req, res);
});

gamesRouter.get("/:id", (req, res) => {
    const urlWithApiKey= `${req.baseUrl}?api_key=${API_KEY}`;
    req.originalUrl = urlWithApiKey;
    getGameByIdHandler(req, res);
});

module.exports = gamesRouter;