const { Router } = require('express');
const gamesRouter = require('./gamesRouter');
const genreRouter = require('./genreRouter');

const router = Router();

router.use("/videogames", gamesRouter);

router.use("/genre", genreRouter);

module.exports = router;
