'use xstrict';

const Money = require('./src/types/Money');
const price = new Money({ amount: 10, currency: 'PLN' });
console.log('before', price);
price.amount = 25;
console.log('after', price);
