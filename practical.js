// quesion 1#
let num = Number(prompt("Enter a number:"));

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}
console.log("quesion 2");

// quesion 2#

for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}
console.log("quesion 3");

// quesion 3#
let i = 2;

while (i <= 50) {
    console.log(i);
    i += 2;
}
console.log("quesion 4");
// quesion 4#
let x= 10;

do {
    console.log(i);
    x--;
} while (x >= 1);

console.log("Lift off!");

console.log("quesion 5");
// quesion 5#
const greet = (name) => {
    return "Hello, " + name + "!";
};

console.log(greet("Mazen"));

console.log("quesion 6");

// quesion 6#
let randomNum = Math.floor(Math.random() * 10) + 1;

console.log(randomNum);

// quesion 7#
console.log("quesion 7");

let scores = [80, 95, 60, 75, 90];

let highest = Math.max(...scores);
let lowest = Math.min(...scores);
console.log("Highest Score: " + highest);
console.log("Lowest Score: " + lowest);

// quesion 8#
console.log("quesion 8");

let temp = -4.7;
console.log("Absolute Value: " + Math.abs(temp));
console.log("CEIL: " + Math.ceil(temp));
console.log("FLOOR: " + Math.floor(temp));
console.log("Nearest Number: " + Math.round(temp));



// quesion 9#
console.log("quesion 9");

let fullName = prompt("Enter your full name:");

fullName = fullName.trim();

console.log("Length: " + fullName.length);

console.log("Uppercase: " + fullName.toUpperCase());

console.log("Lowercase: " + fullName.toLowerCase());

console.log("First Space: " + fullName.indexOf(" "));

let firstName = fullName.split(" ")[0];

console.log("First Name: " + firstName);


// quesion 10#
console.log("quesion 10");

let names = ["Mohamed", "Mazen", "Adham", "Yousef","Ahmed"];

let randomIndex = Math.floor(Math.random() * names.length);

let randomName = names[randomIndex];

console.log("Random Name: " + randomName);