'use strict';

// const db = require('../db');
// const { cars } = db.transaction(async function(transaction) {
//   const car = await transaction('cars')
//
//   return { cars };
// });

const cars = ['Honda', 'Ford', 'Toyota'];


module.exports = function(app, { db }) {
  app.get('/', function(request, response) {
    console.log(cars)
    response.view('index', {cars: cars});
  });
};
