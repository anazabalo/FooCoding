//Step 1.1

const doubleOddNumbers = (numbers) => {
  const newNumbers =
    
    numbers.filter(oddNumbers => oddNumbers % 2 !== 0)
    .map(oddNumbers => oddNumbers % 2 !== 0 && oddNumbers * 2)
  
  return newNumbers
};

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers)); // ==> [2, 6]

// Step 1.2

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 1.0
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];



const maartjeEarnings = (weekDay) => {

  const weekDaysEarnings =
    weekDay.map(weekDaysDuration => weekDaysDuration.duration / 60)
      .filter(weekDaysDuration => weekDaysDuration >= 2)
      .map(weekDaysDuration => weekDaysDuration * hourRate)
      .reduce((earning, amount) => earning + amount, 0)
      .toFixed(2);
  
  return  `Amount earned €${weekDaysEarnings}`

}

const daysWorked = monday.concat (tuesday)
const hourRate = 20
console.log(maartjeEarnings(daysWorked))



