const router = require('express').Router();
const Game = require('../models/Game');

router.get('/', async (req, res) => {
  try {
    const games = await Game.find({});
    res.status(200).json(games);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  const newGame = new Game(req.body);
  try {
    const savedGame = await newGame.save();
    res.status(201).json(savedGame);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;