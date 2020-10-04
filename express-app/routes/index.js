const express = require('express');
const router = express.Router();
const similarityInferenceController = require('../controller/inference.js')

// Mock user
const mockUserPreferences = {
  cuisineType: 'Japonesa',
  price: 50,
  glutenFree: false,
  sugarFree: false,
  lactoseFree: false,
  soyFree: false,
  thematic: false,
  rating: 1
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(similarityInferenceController.getDataBase)
});

router.post('/', function (req, res) {
  const userPreferences = req.body
  res.send(similarityInferenceController.getSimilars(userPreferences || mockUserPreferences))
})

module.exports = router;
