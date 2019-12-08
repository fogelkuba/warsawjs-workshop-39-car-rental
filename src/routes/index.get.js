'use strict';

module.exports = function(app, { db }) {

  // const cars = await db('cars_with_status').select().map(car => car.make);
// const cars = ['Ford', 'Honda', 'Toyota'];


  app.get('/', async function(request, response) {
    const cars = await db('cars_with_status').select().map(car => car.make);
    console.log(cars);
    response.view('index', {cars: [...new Set(cars)]});
  });
};
