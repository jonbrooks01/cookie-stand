'use strict';

let sectionElem = document.getElementById('city');
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
  counter: 0,
  avgSale: [],
  customerPerHour: [],
  randoCustomer: function (){
    for (let i = 0; i < hours.length; i++) {
      let time = getNumber(this.min, this.max);
      this.customerPerHour.push(time);
    }
  },
  soldCookies: function (){
    for (let i = 0; i < this.customerPerHour.length; i++) {
      let sold = Math.floor(this.avg * this.customerPerHour[i]);
      this.avgSale.push(sold);
    }
  },
  render: function(){
    let cityElem = document.createElement('ul');
    sectionElem.appendChild(cityElem);
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.city;
    cityElem.appendChild(h2Elem);
    for (let i =0; i < hours.length; i++) {
      let total = document.createElement('li');
      total.textContent = `${hours[i]}: ${this.avgSale[i]} cookies `;
      this.counter += this.avgSale[i];
      cityElem.appendChild(total);
    }console.log(this.counter);
    let total1 = document.createElement('li');
    total1.textContent = `Total: ${this.counter} cookies `;
    cityElem.appendChild(total1);
  }
};
console.log(seattle.counter);

let tokyo = {
  city: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  counter: 0,
  avgSale: [],
  customerPerHour: [],
  randoCustomer: function (){
    for (let i = 0; i < hours.length; i ++) {
      let time = getNumber(this.min, this.max);
      this.customerPerHour.push(time);
    }
  },
  soldCookies: function (){
    for (let i = 0; i < this.customerPerHour.length; i++) {
      let sold = Math.floor(this.avg * this.customerPerHour[i]);
      this.avgSale.push(sold);
    }
  },
  render: function(){
    let cityElem = document.createElement('ul');
    sectionElem.appendChild(cityElem);
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.city;
    cityElem.appendChild(h2Elem);
    for (let i =0; i < hours.length; i++) {
      let total = document.createElement('li');
      total.textContent = `${hours[i]}: ${this.avgSale[i]} cookies `;
      this.counter += this.avgSale[i];
      cityElem.appendChild(total);
    }console.log(this.counter);
    let total1 = document.createElement('li');
    total1.textContent = `Total: ${this.counter} cookies `;
    cityElem.appendChild(total1);
  }
};

let dubai = {
  city: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  counter: 0,
  avgSale: [],
  customerPerHour: [],
  randoCustomer: function (){
    for (let i = 0; i < hours.length; i ++) {
      let time = getNumber(this.min, this.max);
      this.customerPerHour.push(time);
    }
  },
  soldCookies: function (){
    for (let i = 0; i < this.customerPerHour.length; i++) {
      let sold = Math.floor(this.avg * this.customerPerHour[i]);
      this.avgSale.push(sold);
    }
  },
  render: function(){
    let cityElem = document.createElement('ul');
    sectionElem.appendChild(cityElem);
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.city;
    cityElem.appendChild(h2Elem);
    for (let i =0; i < hours.length; i++) {
      let total = document.createElement('li');
      total.textContent = `${hours[i]}: ${this.avgSale[i]} cookies `;
      this.counter += this.avgSale[i];
      cityElem.appendChild(total);
    }console.log(this.counter);
    let total1 = document.createElement('li');
    total1.textContent = `Total: ${this.counter} cookies `;
    cityElem.appendChild(total1);
  }
};

let paris = {
  city: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  counter: 0,
  avgSale: [],
  customerPerHour: [],
  randoCustomer: function (){
    for (let i = 0; i < hours.length; i ++) {
      let time = getNumber(this.min, this.max);
      this.customerPerHour.push(time);
    }
  },
  soldCookies: function (){
    for (let i = 0; i < this.customerPerHour.length; i++) {
      let sold = Math.floor(this.avg * this.customerPerHour[i]);
      this.avgSale.push(sold);
    }
  },
  render: function(){
    let cityElem = document.createElement('ul');
    sectionElem.appendChild(cityElem);
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.city;
    cityElem.appendChild(h2Elem);
    for (let i =0; i < hours.length; i++) {
      let total = document.createElement('li');
      total.textContent = `${hours[i]}: ${this.avgSale[i]} cookies `;
      this.counter += this.avgSale[i];
      cityElem.appendChild(total);
    }console.log(this.counter);
    let total1 = document.createElement('li');
    total1.textContent = `Total: ${this.counter} cookies `;
    cityElem.appendChild(total1);
  }
};

let lima = {
  city: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  counter: 0,
  avgSale: [],
  customerPerHour: [],
  randoCustomer: function (){
    for (let i = 0; i < hours.length; i ++) {
      let time = getNumber(this.min, this.max);
      this.customerPerHour.push(time);
    }
  },
  soldCookies: function (){
    for (let i = 0; i < this.customerPerHour.length; i++) {
      let sold = Math.floor(this.avg * this.customerPerHour[i]);
      this.avgSale.push(sold);
    }
  },
  render: function(){
    let cityElem = document.createElement('ul');
    sectionElem.appendChild(cityElem);
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.city;
    cityElem.appendChild(h2Elem);
    for (let i =0; i < hours.length; i++) {
      let total = document.createElement('li');
      total.textContent = `${hours[i]}: ${this.avgSale[i]} cookies `;
      this.counter += this.avgSale[i];
      cityElem.appendChild(total);
    }console.log(this.counter);
    let total1 = document.createElement('li');
    total1.textContent = `Total: ${this.counter} cookies `;
    cityElem.appendChild(total1);
  }
};

seattle.randoCustomer();
seattle.soldCookies();
seattle.render();

tokyo.randoCustomer();
tokyo.soldCookies();
tokyo.render();

dubai.randoCustomer();
dubai.soldCookies();
dubai.render();

paris.randoCustomer();
paris.soldCookies();
paris.render();

lima.randoCustomer();
lima.soldCookies();
lima.render();
