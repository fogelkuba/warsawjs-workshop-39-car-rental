'use strict';

const listPrice = require('../strategies/listPrice');
const Money = require('../types/Money');

class Cars {
    constructor({ mapper }) {
        this._mapper = mapper;
    }

    async getOffer (carID, dateRange) {
        // const db = this._db;
        const mapper = this._mapper;
        const car = await mapper.find({ID: carID})
        const { price, days } = listPrice(
            // new Money({amount:car.list_price_amount, currency: car.list_price_currency}),
            car.getListPrice(),
            dateRange
        );

        return { price, days, car }
    }
}

module.exports = Cars;
