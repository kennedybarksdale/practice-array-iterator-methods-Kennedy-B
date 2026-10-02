//1.
let fruits = ["apple", "banana", "cherry"];
fruits.push("orange");
fruits.shift();
fruits.unshift("grape");

console.log(fruits);

//2.
let colors = ["red", "blue", "green", "blue", "yellow"];

let results = [
  colors.includes("blue"),
  colors.indexOf("blue"),
  colors.lastIndexOf("blue")
];

console.log(results);

//3. 
let teamA = ["Alice", "Bob"];
let teamB = ["Charlie", "Diana"];

let allTeams = teamA.concat(teamB);
allTeams.push("Eve");

console.log(allTeams);

//4. 
let numbers = [10, 20, 30, 40, 50];

let middleNumbers = numbers.slice(1, 3);
numbers.splice(3, 2, 60, 70);

console.log(middleNumbers);
console.log(numbers);

//5.
let scores = [85, 70, 95, 60, 75];

scores.sort((a, b) => a - b);
scores.reverse();

console.log(scores);