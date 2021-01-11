// Iteration 1: Names and Input
const hacker1 = 'Aylin';
console.log(`The driver's name is ${hacker1}`);
const hacker2 = 'Hai';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length < hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops
let changedNameHacker1 = '';

for (let i = 0; i < hacker1.length; i++) {
    changedNameHacker1 += hacker1[i].toUpperCase() + ' ';
} console.log(changedNameHacker1.slice(0, changedNameHacker1.length - 1));

let changedNameHacker2 = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
    changedNameHacker2 += hacker2[i]
} console.log(changedNameHacker2);

let comparedNames = hacker1.localeCompare(hacker2);
if (comparedNames === -1) {
    console.log(`The driver's name goes first.`);
} else if (comparedNames === 1) {
    console.log(`Yo, the navigator goes first definitely.`);
} else {
    console.log(`What?! You both have the same name?`)
};