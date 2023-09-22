const {Router} = require("express");
const getGenreHandler = require("../handlers/genres/getGenreHandler");

const genreRouter = Router();

genreRouter.get("/", (req, res) => {
    getGenreHandler(req,res);
});

module.exports = genreRouter;