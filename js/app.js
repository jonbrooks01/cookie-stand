'use strict';

let sectionElem = document.getElementById('city');
console.log(sectionElem);
let allCityInfo = [];

let articleElem = document.createElement('article');
sectionElem.appendChild(articleElem);

let hours = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Total'];

function getNumber (min,max) {
  return Math.floor(Math.random() * (max - min +1) + min);
}

function CityInfo(name, min, max, avg, counter, avgSale =[]){

  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.counter = counter;
  this.avgSale = avgSale;

  allCityInfo.push(this);
}

let seattle = new CityInfo('Seattle', '23', '65', '6.3', '0', [] );
let tokyo = new CityInfo('Tokyo', '3', '24', '1.2', '0', []);
let dubai = new CityInfo('Dubai', '11', '38', '3.7', '0', []);
let paris = new CityInfo('Paris', '20', '38', '2.3', '0', []);
let lima = new CityInfo('Lima', '2', '16', '4.6', '0', []);

console.log(allCityInfo);


CityInfo.prototype.soldCookies = function(){
  for(let i = 0; i < hours.length; i++){
    let customers = getNumber(this.min, this.max);
    this.avgSale.push(Math.floor(customers * this.avg));
  }
};

// CityInfo.soldCookies();
// console.log(allCityInfo.avgSale);

// CityInfo.prototype.render = function(){
// let articleElem = document.createElement('article');
// sectionElem.appendChild(articleElem);



//     let cityElem = document.createElement('ul');
//     sectionElem.appendChild(cityElem);
//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.city;
//     cityElem.appendChild(h2Elem);
//     for (let i =0; i < hours.length; i++) {
//       let total = document.createElement('li');
//       total.textContent = `${hours[i]}: ${this.avgSale[i]} cookies `;
//       this.counter += this.avgSale[i];
//       cityElem.appendChild(total);
//     }console.log(this.counter);
//     let total1 = document.createElement('li');
//     total1.textContent = `Total: ${this.counter} cookies `;
//     cityElem.appendChild(total1);

// };


let tableElem = document.createElement('table');
articleElem.appendChild(tableElem);


let row1 = document.createElement('tr');
tableElem.appendChild(row1);

for(let i = 0; i < hours.length; i ++){
  let thElem = document.createElement('th');
  tableElem.appendChild(thElem);
  thElem.textContent = `${hours[i]}`;
}

for(let i = 0; i < allCityInfo.length; i++){
  let trElem = document.createElement ('tr');
  tableElem.appendChild(trElem);
  trElem.textContent = `${allCityInfo[i].name}`;

  allCityInfo[i].soldCookies();

  for(let j = 1; j < allCityInfo[i].avgSale.length; j++){
    let tdElem = document.createElement ('td');
    trElem.appendChild(tdElem);
    tdElem.textContent = allCityInfo[i].avgSale[j];

    // for (let x = 0; x < allCityInfo[x].avgSale.length; x++) {
    //   let total = document.createElement('td');
    //   total.textContent = allCityInfo[i].counter;
    //   this.counter += this.avgSale[i];
    //   tableElem.appendChild(total);
    // }
  }
}





// let seattle = {
//   city: 'Seattle',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   counter: 0,
//   avgSale: [],
//   customerPerHour: [],
//   randoCustomer: function (){
//     for (let i = 0; i < hours.length; i++) {
//       let time = getNumber(this.min, this.max);
//       this.customerPerHour.push(time);
//     }
//   },
//   soldCookies: function (){
//     for (let i = 0; i < this.customerPerHour.length; i++) {
//       let sold = Math.floor(this.avg * this.customerPerHour[i]);
//       this.avgSale.push(sold);
//     }
//   },
// render: function(){
//   let cityElem = document.createElement('ul');
//   sectionElem.appendChild(cityElem);
//   let h2Elem = document.createElement('h2');
//   h2Elem.textContent = this.city;
//   cityElem.appendChild(h2Elem);
//   for (let i =0; i < hours.length; i++) {
//     let total = document.createElement('li');
//     total.textContent = `${hours[i]}: ${this.avgSale[i]} cookies `;
//     this.counter += this.avgSale[i];
//     cityElem.appendChild(total);
//   }console.log(this.counter);
//   let total1 = document.createElement('li');
//   total1.textContent = `Total: ${this.counter} cookies `;
//   cityElem.appendChild(total1);
//   }
// };
// console.log(seattle.counter);

// let tokyo = {
//   city: 'Tokyo',
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   counter: 0,
//   avgSale: [],
//   customerPerHour: [],
//   randoCustomer: function (){
//     for (let i = 0; i < hours.length; i ++) {
//       let time = getNumber(this.min, this.max);
//       this.customerPerHour.push(time);
//     }
//   },
//   soldCookies: function (){
//     for (let i = 0; i < this.customerPerHour.length; i++) {
//       let sold = Math.floor(this.avg * this.customerPerHour[i]);
//       this.avgSale.push(sold);
//     }
//   },
//   render: function(){
//     let cityElem = document.createElement('ul');
//     sectionElem.appendChild(cityElem);
//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.city;
//     cityElem.appendChild(h2Elem);
//     for (let i =0; i < hours.length; i++) {
//       let total = document.createElement('li');
//       total.textContent = `${hours[i]}: ${this.avgSale[i]} cookies `;
//       this.counter += this.avgSale[i];
//       cityElem.appendChild(total);
//     }console.log(this.counter);
//     let total1 = document.createElement('li');
//     total1.textContent = `Total: ${this.counter} cookies `;
//     cityElem.appendChild(total1);
//   }
// };

// let dubai = {
//   city: 'Dubai',
//   min: 11,
//   max: 38,
//   avg: 3.7,
//   counter: 0,
//   avgSale: [],
//   customerPerHour: [],
//   randoCustomer: function (){
//     for (let i = 0; i < hours.length; i ++) {
//       let time = getNumber(this.min, this.max);
//       this.customerPerHour.push(time);
//     }
//   },
//   soldCookies: function (){
//     for (let i = 0; i < this.customerPerHour.length; i++) {
//       let sold = Math.floor(this.avg * this.customerPerHour[i]);
//       this.avgSale.push(sold);
//     }
//   },
//   render: function(){
//     let cityElem = document.createElement('ul');
//     sectionElem.appendChild(cityElem);
//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.city;
//     cityElem.appendChild(h2Elem);
//     for (let i =0; i < hours.length; i++) {
//       let total = document.createElement('li');
//       total.textContent = `${hours[i]}: ${this.avgSale[i]} cookies `;
//       this.counter += this.avgSale[i];
//       cityElem.appendChild(total);
//     }console.log(this.counter);
//     let total1 = document.createElement('li');
//     total1.textContent = `Total: ${this.counter} cookies `;
//     cityElem.appendChild(total1);
//   }
// };

// let paris = {
//   city: 'Paris',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   counter: 0,
//   avgSale: [],
//   customerPerHour: [],
//   randoCustomer: function (){
//     for (let i = 0; i < hours.length; i ++) {
//       let time = getNumber(this.min, this.max);
//       this.customerPerHour.push(time);
//     }
//   },
//   soldCookies: function (){
//     for (let i = 0; i < this.customerPerHour.length; i++) {
//       let sold = Math.floor(this.avg * this.customerPerHour[i]);
//       this.avgSale.push(sold);
//     }
//   },
//   render: function(){
//     let cityElem = document.createElement('ul');
//     sectionElem.appendChild(cityElem);
//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.city;
//     cityElem.appendChild(h2Elem);
//     for (let i =0; i < hours.length; i++) {
//       let total = document.createElement('li');
//       total.textContent = `${hours[i]}: ${this.avgSale[i]} cookies `;
//       this.counter += this.avgSale[i];
//       cityElem.appendChild(total);
//     }console.log(this.counter);
//     let total1 = document.createElement('li');
//     total1.textContent = `Total: ${this.counter} cookies `;
//     cityElem.appendChild(total1);
//   }
// };

// let lima = {
//   city: 'Lima',
//   min: 2,
//   max: 16,
//   avg: 4.6,
//   counter: 0,
//   avgSale: [],
//   customerPerHour: [],
//   randoCustomer: function (){
//     for (let i = 0; i < hours.length; i ++) {
//       let time = getNumber(this.min, this.max);
//       this.customerPerHour.push(time);
//     }
//   },
//   soldCookies: function (){
//     for (let i = 0; i < this.customerPerHour.length; i++) {
//       let sold = Math.floor(this.avg * this.customerPerHour[i]);
//       this.avgSale.push(sold);
//     }
//   },
//   render: function(){
//     let cityElem = document.createElement('ul');
//     sectionElem.appendChild(cityElem);
//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.city;
//     cityElem.appendChild(h2Elem);
//     for (let i =0; i < hours.length; i++) {
//       let total = document.createElement('li');
//       total.textContent = `${hours[i]}: ${this.avgSale[i]} cookies `;
//       this.counter += this.avgSale[i];
//       cityElem.appendChild(total);
//     }console.log(this.counter);
//     let total1 = document.createElement('li');
//     total1.textContent = `Total: ${this.counter} cookies `;
//     cityElem.appendChild(total1);
//   }
// };

// seattle.randoCustomer();
// seattle.soldCookies();
// seattle.render();

// tokyo.randoCustomer();
// tokyo.soldCookies();
// tokyo.render();

// dubai.randoCustomer();
// dubai.soldCookies();
// dubai.render();

// paris.randoCustomer();
// paris.soldCookies();
// paris.render();

// lima.randoCustomer();
// lima.soldCookies();
// lima.render();
