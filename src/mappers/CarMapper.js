

'use strict';

const Car = require('../entities/Car');
const Money = require('../types/Money');

class CarMapper {
    constructor ({ db }) {
        this._db = db;
    }
    fromRowData (data) {
        return new Car({
            carID: data.car_id,
            created: true,
            make: data.make,
            model: data.model,
            plate: data.plate,
            listPrice: new Money({ amount: data.list_price_amount, currency: data.list_price_currency }),
            rented: data.rented,
            rentalID: data.rentalID
        });
    }

    toRow (car) {
        return {
            car_id: car.getID(),
            make: car.getMake(),
            model: car.getModel(),
            plate: car.getPlate(),
            list_price_amount: car.getListPrice().amount,
            list_price_currency: car.getListPrice().currency,
            rented: car.isRented(),
            rental_id: car.getRentalID()
        };
    }
    async find ({ ID }) {
        const db = this._db;
        const carRow = await db('cars')
            .first()
            .where({ car_id: ID });
        if (!carRow) {
            return Promise.reject(new Error('No entry found for car: ' + ID));
        }
        return this.fromRowData(carRow);
    }
    async update (car) {
        if (!car.getID()) {
            throw new Error('No ID - cannot update car');
        }
        const row = this.toRow(car);
        return await this._db('cars').update(row).where({ car_id: car.getID() });
    }
}

module.exports = CarMapper;
