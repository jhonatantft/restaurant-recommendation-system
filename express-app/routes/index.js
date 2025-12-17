require('dotenv').config()
const express = require('express');
const router = express.Router();
const similarityInferenceController = require('../controller/inference.js')

const MongoClient = require('mongodb').MongoClient
const dbUser = process.env.MONGO_DB_USERNAME || process.env.DB_USER
const dbPassword = process.env.MONGO_DB_PASSWORD || process.env.DB_PASSWORD
const dbName = process.env.MONGO_DB_DATABASE || 'ia-hawk'
const mongoHost = process.env.MONGO_HOST || 'mongodb'
const connectionString = process.env.MONGODB_URI || `mongodb://${dbUser}:${dbPassword}@${mongoHost}:27017/${dbName}?authSource=admin`

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
    const db = client.db(dbName)

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
