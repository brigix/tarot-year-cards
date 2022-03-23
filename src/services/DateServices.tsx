import { Timeline } from "@mui/lab";
import TimelineRecord from "../dataTypes/TimelineRecord";
import CardsServices from "./CardsServices";

const sumOfMonthAndDay = (birthday: Date) => {
    if (birthday != null ) {
      const month: number = birthday.getMonth()+1;
      const day: number = birthday.getDate();
      const sumOfMonthAndDay: number = month + day;
      return sumOfMonthAndDay;
    } else {
      return 0;
    }
  }

const sumOfDigits = (num: number) => {
    const arrOfDigits = Array.from(String(num), Number);
    let sum: number = arrOfDigits.reduce((previous, current) => previous + current, 0);
    if (sum > 22) {
        sum = sumOfDigits(sum);
    }    
    return sum;
  }

const calculateYearNumber = (year: number, birthday: Date)=> {
    const sumOfDate: number =year + sumOfMonthAndDay(birthday);
    const yearNumber: number = sumOfDigits(sumOfDate);
    return yearNumber;
 }

const calculateLifeNumber = (birthday: Date) => {
  if (birthday != null ) {
  const year: number = birthday.getFullYear();
  const lifeNumber: number = calculateYearNumber(year, birthday);
  return lifeNumber;
  } else {
    return 0;
  }
 }

 const calculateTimeline = ( birthday: Date ) => {
    let recordsTimeline: Array<TimelineRecord>  = new Array();
    const thisYear = new Date().getFullYear();
    let year = birthday.getFullYear();    
        while (year <= thisYear+60) {
            let yearNumber: number = calculateYearNumber(year, birthday);
            let yearCard: string = CardsServices(yearNumber);
            let age: number = year - birthday.getFullYear();
            let record: TimelineRecord = new TimelineRecord(yearNumber, yearCard, year, age );
            recordsTimeline.push(record);
            year++;   
        } 
    return recordsTimeline;        
}

 export {calculateLifeNumber, calculateYearNumber, calculateTimeline, sumOfDigits, sumOfMonthAndDay}