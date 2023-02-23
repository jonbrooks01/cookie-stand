'use strict';

let sectionElem = document.getElementById('cookie');
console.log(sectionElem);

let hours = [ '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function getNumber (min,max) {
  return Math.floor(Math.random() * (max - min +1) + min);
}

let seattle = {
  city: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  avgSale: [],
  customerPerHour: [],
  randoCustomer: function (){
    for (let i = 0; i < hours.length; i ++) {
      let time = getNumber(this.min, this.max);
      this.customerPerHour.push(time);
    }
  },
  soldCookies: function (){
    console.log(this.customerPerHour);
    for (let i = 0; i < this.customerPerHour.length; i++) {
      let sold = Math.floor(this.avg * this.customerPerHour[i]);
      this.avgSale.push(sold);
    }
  }
};



// let tokyo = {
//   city: 'Tokyo',
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   avgSale: [],
//   customerPerHour: [],
//   randoCustomer: function (){
//     for (let i = 0; i < hours.length; i ++) {
//       let time = getNumber(this.min, this.max);
//       this.customerPerHour.push(time);
//     }
//   }

// };

// let dubai = {
//   city: 'Dubai',
//   min: 11,
//   max: 38,
//   avg: 3.7,
//   avgSale: [],
//   customerPerHour: [],
//   randoCustomer: function (){
//     for (let i = 0; i < hours.length; i ++) {
//       let time = getNumber(this.min, this.max);
//       this.customerPerHour.push(time);
//     }
//   }
// };

// let paris = {
//   city: 'Paris',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   avgSale: [],
//   customerPerHour: [],
//   randoCustomer: function (){
//     for (let i = 0; i < hours.length; i ++) {
//       let time = getNumber(this.min, this.max);
//       this.customerPerHour.push(time);
//     }
//   }
// };

// let lima = {
//   city: 'Lima',
//   min: 2,
//   max: 16,
//   avg: 4.6,
//   avgSale: [],
//   customerPerHour: [],
//   randoCustomer: function (){
//     for (let i = 0; i < hours.length; i ++) {
//       let time = getNumber(this.min, this.max);
//       this.customerPerHour.push(time);
//     }
//   }
// };


seattle.randoCustomer();
// console.log(seattle.customerPerHour);
seattle.soldCookies();
console.log(seattle.avgSale);
