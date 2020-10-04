require('dotenv').config()
const express = require('express');
const router = express.Router();
const similarityInferenceController = require('../controller/inference.js')

const MongoClient = require('mongodb').MongoClient
const dbUser = process.env.DB_USER
const dbPassord = process.env.DB_PASSWORD
const connectionString = `mongodb+srv://${dbUser}:${dbPassord}@cluster0.ru7nr.mongodb.net/<dbname>?retryWrites=true&w=majority`

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

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('ia-hawk')

    /* GET home page. */
    router.get('/', function(req, res, next) {
      db.collection('cases').find().toArray()
        .then(data => {
          res.send(data)
        })
        .catch(error => console.error(error))
    });

    router.post('/', function (req, res) {
      const userPreferences = req.body
      db.collection('cases').find().toArray()
        .then(data => {
          res.send(similarityInferenceController.getSimilars(userPreferences || mockUserPreferences, data))
        })
        .catch(error => console.error(error))
    })

    // data.forEach(currentCase => {
    //   quotesCollection.insertOne(currentCase)
    //   .then(result => {
    //     console.log(result)
    //   })
    //   .catch(error => console.error(error))
    // })
  })
  .catch(error => console.error(error))

module.exports = router;
