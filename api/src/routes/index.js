const { Router } = require('express');
const gamesRouter = require('./gamesRouter');


const router = Router();

router.use("/videogames", gamesRouter);

module.exports = router;
