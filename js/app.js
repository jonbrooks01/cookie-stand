'use strict';

let sectionElem = document.getElementById('city');
console.log(sectionElem);
let allCityInfo = [];

let articleElem = document.createElement('article');
sectionElem.appendChild(articleElem);

let tableElem = document.createElement('table');
articleElem.appendChild(tableElem);

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];

function getNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function CityInfo(name, min, max, avg, avgSale = []) {

  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.counter = 0;
  this.avgSale = avgSale;

  allCityInfo.push(this);
}

let seattle = new CityInfo('Seattle', 23, 65, 6.3, []);
let tokyo = new CityInfo('Tokyo', 3, 24, 1.2, []);
let dubai = new CityInfo('Dubai', 11, 38, 3.7, []);
let paris = new CityInfo('Paris', 20, 38, 2.3, []);
let lima = new CityInfo('Lima', 2, 16, 4.6, []);

console.log(allCityInfo);

// >>>>>> Prototype functions

CityInfo.prototype.soldCookies = function () {
  for (let i = 0; i < hours.length; i++) {
    let customers = getNumber(this.min, this.max);
    this.avgSale.push(Math.floor(customers * this.avg));
    this.counter += this.avgSale[i];
  }
};

// >>>>>>> render function

CityInfo.prototype.render = function () {
  this.soldCookies();


  let row1 = document.createElement('tr');
  tableElem.appendChild(row1);

  let tdElem1 = document.createElement('td');
  tdElem1.textContent = this.name;
  row1.appendChild(tdElem1);

  for(let i = 0; i < this.avgSale.length; i++){
    let tdElem2 = document.createElement('td');
    tdElem2.textContent = this.avgSale[i];
    row1.appendChild(tdElem2);
  }

  let tdElem3 = document.createElement('td');
  row1.appendChild(tdElem3);
  tdElem3.textContent = this.counter;
};

function header() {

  let row1 = document.createElement('tr');
  tableElem.appendChild(row1);

  let thElem1 = document.createElement('th');
  row1.appendChild(thElem1);
  thElem1.textContent = ' ';



  for (let i = 0; i < hours.length; i++) {
    let thElem = document.createElement('th');
    row1.appendChild(thElem);
    thElem.textContent = `${hours[i]}`;
  }
  let thElem2 = document.createElement('th');
  row1.appendChild(thElem2);
  thElem2.textContent = 'Total';
}

function footer(){
  let rowfoot = document.createElement ('tr');
  tableElem.appendChild(rowfoot);

  let tdfoot = document.createElement('td');
  rowfoot.appendChild(tdfoot);
  tdfoot.textContent = 'Total';
  let counter1 = 0;
  for (let i = 0; i < hours.length; i++) {
    let sum = 0;
    for (let j = 0; j < allCityInfo.length; j++) {
      sum += allCityInfo[j].avgSale[i];
    }
    counter1 += sum;

    let tdfoot1 = document.createElement('td');
    rowfoot.appendChild(tdfoot1);
    tdfoot1.textContent = sum;
    console.log(sum);
  }
  let tdfoot2 = document.createElement('td');
  rowfoot.appendChild(tdfoot2);
  tdfoot2.textContent = counter1;
}


header();
seattle.render();
tokyo.render();
paris.render();
dubai.render();
lima.render();
footer();
