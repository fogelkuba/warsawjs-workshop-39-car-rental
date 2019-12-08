'use strict';

const Money = require('../types/Money');

class Car {
    constructor({
            rentalID = null,
            carID = null,
            duration = null,
            active = false,
            price = null
        }) {
        this._rentalID = rentalID;
        this._carID = carID;
        this._duration = duration ? new DateRange(duration) : null;
        this._active = active;
        this._price = price ? new Money(price) : null;
    }

    assignID(ID) {
        this._rentalID = ID;
    }
    getID() {
        return this._rentalID;
    }
    getCarID() {
        return this._carID;
    }
    getDuration() {
        return this._duration;
    }
    isActive() {
        return this._active;
    }
    getPrice() {
        return this._price;
    }

    start(carId, duration, price) {
        if (this.isActive()) {
            throw new Error('Rental already started - ', carId);
        }
        this._active = true;
        this._carID = carID;
        this._duration = new DataRange(duration)
        this._price = new Money(price);
    }

    end() {
        if (!this.isActive()) {
            throw new Error('');
        }
        this._active = false;
    }
}

module.exports = Car;
