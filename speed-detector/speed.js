// index.js
const speed = parseInt(prompt("Enter the speed of the car: "));

if (speed < 70) {
  console.log("Ok");
} else {
  const demeritPoints = Math.floor((speed - 70) / 5);
  if (demeritPoints > 12) {
    console.log("License suspended");
  } else {
    console.log(`Points: ${demeritPoints}`);
  }
}