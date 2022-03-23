import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {sumOfDigits, calculateYearNumber, sumOfMonthAndDay} from "./services/DateServices";

const testSumOfDigits = [
  { num: 2028, expected: 12 },
  { num: 1953, expected: 18 },
  { num: 2050, expected: 7 },
  { num: 1994, expected: 5 },
  { num: 1975, expected: 22 }
];
const testYearNumber = [
  {year: 1981, date: new Date("1981-08-14"), expected: 5},
  {year: 2028, date: new Date("1981-08-14"), expected: 7},
  {year: 2022, date: new Date("1981-08-14"), expected: 10},
  {year: 1988, date: new Date("1981-08-14"), expected: 3},
  {year: 1919, date: new Date("1919-10-24"), expected: 18}
]
const testSumOfMonthAndDay = [
  {date: new Date("1981-08-14"), expected: 22},
  {date: new Date("1919-10-24"), expected: 34}
]

test("Sums digits of number", () => {
  testSumOfDigits.forEach((num) => {
    expect(sumOfDigits(num.num)).toBe(num.expected);
  });
});
test("Year Number", () => {
  testYearNumber.forEach((num) => {
    expect(calculateYearNumber(num.year, num.date)).toBe(num.expected);
  });
});
test("sum Of Month And Day", () =>{
  testSumOfMonthAndDay.forEach((num) => {
    expect(sumOfMonthAndDay(num.date)).toBe(num.expected);
  });
});

