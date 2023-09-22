const { Router } = require('express');
const getGamesHandler = require('../handlers/games/getGamesHandler');
const getGameByIdHandler = require("../handlers/games/getGameByIdHandler");
const postGamesHandler = require('../handlers/games/postGamesHandler');

const gamesRouter = Router();

gamesRouter.get("/", (req, res) => {
    getGamesHandler(req, res);
});

gamesRouter.get("/:id", (req, res) => {
    getGameByIdHandler(req, res);
});

gamesRouter.post("/", (req, res) => {
    postGamesHandler(req,res);
});

module.exports = gamesRouter;