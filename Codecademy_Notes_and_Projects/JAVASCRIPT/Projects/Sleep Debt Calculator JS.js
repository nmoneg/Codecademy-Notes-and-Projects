const getSleepHours = day => {
  switch (day) {
    case "monday":
      return 8;
    case "tuesday":
      return 6;
    case "wednesday":
      return 6;
    case "thursday":
      return 7;
    case "friday":
      return 8;
    case "saturday":
      return 9;
    case "sunday":
      return 6;
  }
};
// console.log(getSleepHours("tuesday"));

const getActualSleepHours = () => 8 + 6 + 6 + 7 + 8 + 9 + 6; 
// getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday");
// console.log(getActualSleepHours());

const getIdealSleepHours = (hours) => {
  return hours * 7;
};
// console.log(getIdealSleepHours());

function calculateSleepDebt() {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(6);
  let difference = Math.abs(actualSleepHours - idealSleepHours);

  if (actualSleepHours === idealSleepHours ) {
    console.log("You got the perfect amount of sleep!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("You got more sleep than needed.");
    console.log(`Sleep surplus: ${difference}`);
  } else if (actualSleepHours < idealSleepHours) {
    console.log("You should get some rest.");
    console.log(`Sleep deficit: ${difference}`);
  } 
};

calculateSleepDebt();
