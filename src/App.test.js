import { render, screen } from '@testing-library/react';
import App from './App';
import {stringNumbers, fixName, doubleNum, namesOnly, makeStrings, readyToPutInTheDOM} from './utils.js'

test('doubles numbers in array', () => {
  const doubled = [4,20,200];
  const arr = [2,10,100];
  const actual = doubleNum(arr);
  expect(doubled).toEqual(actual);
});



 test('converts int array to string array', () => {
  const stringArr = ['2','5','100'];
  const arr = [2,5,100];
  const actual = stringNumbers(arr);
  
  expect(actual).toEqual(stringArr);
});

test('fixes name', () => {
  const stringArr = ["john", "JACOB", "jinGleHeimer", "schmidt"];
  const expected = ["John", "Jacob", "Jingleheimer", "Schmidt"];
  const actual = fixName(stringArr);
  
  expect(actual).toEqual(expected);
});

test('retunrn only names', () => {
  const data = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]
  const expected = ["Angelina Jolie", "Eric Jones","Paris Hilton","Kayne West","Bob Ziroll"];
  const actual = namesOnly(data);
  
  expect(actual).toEqual(expected);
});

test('verify age', () => {
  const data = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]
  const expected = [
    "Angelina Jolie can go to The Matrix", 
    "Eric Jones is under age!!", 
    "Paris Hilton is under age!!", 
    "Kayne West is under age!!", 
    "Bob Ziroll can go to The Matrix"
];
  const actual = makeStrings(data);
  
  expect(actual).toEqual(expected);
});


test('make headers', () => {
  const data = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]
  const expected = [
    "<h1>Angelina Jolie</h1><h2>80</h2>", 
    "<h1>Eric Jones</h1><h2>2</h2>", 
    "<h1>Paris Hilton</h1><h2>5</h2>", 
    "<h1>Kayne West</h1><h2>16</h2>", 
    "<h1>Bob Ziroll</h1><h2>100</h2>"
];
  const actual = readyToPutInTheDOM(data);
  
  expect(actual).toEqual(expected);
});

