// =================================================
//                     VARIABLES
// =================================================
// 1. Declare a variable
let myVariable = "Variable1";

// 2. Change the value of the variable
myVariable = 10; 

// 3. Change the data type of the variable
myVariable = myVariable.toString();

// 4. Create another variable and the one from above to concatenate
let anotherVariable = "Variable2";
let combinedString = anotherVariable + myVariable;

// 5.) Use any of the variables above or create new ones and print using string interpolation
console.log(`myVariable: ${myVariable}`);
console.log(`anotherVariable: ${anotherVariable}`);
// =================================================
//                      STRINGS
// =================================================
// Using charAt(), print the letter i in Sabrina
const sabrina = "Sabrina";
console.log(sabrina.charAt(1)); // Output: i

// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy
// Unicode is a standardized encoding system for text. Unicode of 'd' is 100.
const teddy = "Teddy";
console.log(teddy.charCodeAt(2)); // Output: 100

// Using fromCharCode() - make it readable for us :). You'll see!
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // Output: Hello

// Take your first and last name and concat()
const firstName = "Svitlana";
const lastName = "Revniuk";
const fullName = firstName.concat(" ", lastName);
console.log(fullName); // Output: Svitlana Revniuk

// Create a string and make it return true using startsWith()
const startsWithString = "Hello, World!";
console.log(startsWithString.startsWith("Hello")); // Output: true

// Now use any variable with endsWith() and return false
const endsWithString = "Hello, World!";
console.log(endsWithString.endsWith("World")); // Output: false

// Finish the following sentence. Use includes() and return true.
const ozgur = 'Once upon a time Ozgur looked up at the Moon, ';
console.log(ozgur.includes('Ozgur')); // Output: true

// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
const joshHadALittleLambOopsCow = "Josh lives in a farm..."; // (Indexing starts from 0)
console.log(joshHadALittleLambOopsCow.indexOf("cow")); // Output: 192

// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien named Vanessa in the String Universe.
const vanessa = "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace.";
console.log(vanessa.lastIndexOf("Vanessa")); // Output: 51

// Can we use length for strings? I don't know, you tell me.
const noWeCantTeo = "but did you try it out though?";
console.log(noWeCantTeo.length); // Output: 31

// If only it was this easy to replace() my ex. Totally not joking, LOL. JK
const replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!";
const replacedString = replaceGokuWithVegeta.replace("Goku", "Vegeta");
console.log(replacedString);

// Josh has been forgetful lately. Let's help Josh by using search(), and find their right 'wifey'.
const joshIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4";
console.log(joshIsLookingForWifey.search(/wifey/i)); // Output: 7

// I guess we can share this pizza sentence. Use slice() to return the other half of pizza.
const pizzaSentence = "pizza, other half of pizza";
console.log(pizzaSentence.slice(pizzaSentence.indexOf(",") + 2)); // Output: other half of pizza

// Now using the pizza sentence, return only pizza (before the comma)
console.log(pizzaSentence.slice(0, pizzaSentence.indexOf(","))); // Output: pizza

// Okay, but who decided to go to this expensive restaurant? Yaz, Poornima, and Leshawn decided to split() the bill. Return an array separating Yaz, Poornima, and Leshawn.
const splitTheBill = "Yaz, Poornima, and Leshawn";
console.log(splitTheBill.split(", ")); // Output: [ 'Yaz', 'Poornima', 'and Leshawn' ]

// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Yaz, Poornima, and Leshawn into pieces. Using splitTheBill, return an array separating all three by characters.
console.log(splitTheBill.split("")); // Output: ['Y', 'a', 'z', ',', ' ', 'P', 'o', 'o', 'r', 'n', 'i', 'm', 'a', ',', ' ', 'a', 'n', 'd', ' ', 'L', 'e', 's', 'h', 'a', 'w', 'n']

// Use this toLowerCase()
const angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS.";
console.log(angry.toLowerCase()); // Output: lower your voice down if you ain't paying my bills.

// Tuan was angry today. Create a string with words that Tuan would yell out. Now lowercase it, to tell Tuan to chill out.
const tuansAngryString = "I AM NOT HAPPY RIGHT NOW!";
console.log(tuansAngryString.toLowerCase()); // Output: i am not happy right now.

// toUpperCase()
const jahlunSaidToPutSomeRespectToHisName = "jahlun";
console.log(jahlunSaidToPutSomeRespectToHisName.toUpperCase()); // Output: JAHLUN

// substring()
const basicGreeting = "Hello World";
console.log(basicGreeting.substring(1, 4));// Returns "ell"


const ohReally = "JavaScript Substring";
console.log(ohReally.substring(0, 10));// Returns "JavaScript"


const aslDays = "xXteoWuzHereXx@aol.com";
console.log(aslDays.substring(aslDays.indexOf("@") + 1));// Returns aol.com

// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.
const loveHandles = "     Extra love handles     ";
console.log(loveHandles.trim());
// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Keke"

// console.log(a _ b)
// console.log(c _ b)
// console.log(d _ d)
// console.log(d _ a)
// console.log(a _ 15)
// console.log(a _ b _ c)
// console.log(c _ b _ a _ d)

const a = 5;
const b = 10;
const c = 15;
const d = "Keke"

console.log(a < b);                // Output: true
console.log(c > b);                // Output: true
console.log(d === d);               // Output: true
console.log(d !== a);               // Output: true
console.log(a === 15);              // Output: false
console.log(a < b && b < c);        // Output: true
console.log(c > b || a < d.length); // Output: true
// =================================================
//                     LOOPS
// =================================================
// Ken has a headache today and he said the room has been spinning like crazy. 
// Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.
for (let i = 1; i <= 10; i++) {
  console.log(`Ken's room is spinning ${i} times.`);
}

// Harry said that was so mean of Teo to do Ken dirty like that. 
// Make Teo's vision spin 20 times FOR LOOP.
for (let i = 1; i <= 20; i++) {
  console.log(`Teo's vision is spinning ${i} times. Mean, huh?`);
}

// But wait! Lisa said, while Teo is spinning 20 times. 
// Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
let apologyCount = 0;
while (apologyCount < 20) {
  console.log("I'm sorry");
  apologyCount++;
}

// To The Left! To The Left! Everything I want in the console to the left. 
// Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = {
  thing1: 'shoes',
  thing2: 'clothes',
  thing3: 'gaming console'
};

for (const key in whateverQueenBeySaid) {
  console.log(whateverQueenBeySaid[key]);
}

// Using (FOR IN LOOP), print the indexes of the array.
const lana = ['l', 'a', 'n', 'a'];
for (const index in lana) {
  console.log(index);
}

// USE (FOR OF LOOP)!
const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner'];
for (const item of tia) {
  console.log(item);
}

// Look into forEach() loop, it accepts a callback aka a function inside a function. 
// Swathi said don't forget each person. No person left behind! 
// Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". 
// Print their name in the console concatenated with the variable.
const perscholas = ['Amira', 'Arely', 'Jonathan'];
perscholas.forEach(person => {
  console.log(`PS ${person}`);
});
// =================================================
//                     ARRAYS
// =================================================
// Look up the following: Make a note of what each one of these methods do
// push()
// pop()
// unshift()
// shift()
// concat()
// splice()
// slice()
// sort()
// includes()
// indexOf()
// length
const fruits = ['apple', 'banana', 'orange'];

// Print banana
console.log(fruits[1]);

// Join all the elements of the array into a string separated by a space.
const joinedFruits = fruits.join(' ');
console.log(joinedFruits);

// Remove orange
fruits.pop();

// Add strawberry, kiwi, and grapes at the end
fruits.push('strawberry', 'kiwi', 'grapes');

// Remove apple
fruits.shift();

// Add mango at the beginning of the array
fruits.unshift('mango');

// Add lemon, and grapefruit between mango and banana
fruits.splice(1, 0, 'lemon', 'grapefruit');

// Remove banana and strawberry
fruits.splice(2, 2);

// Create a new array called exoticFruits. Add 3 exotic fruits inside this array. 
const exoticFruits = ['dragon fruit', 'passion fruit', 'lychee'];

// Create a new variable and assign it with the value of concatenating fruits array and exoticFruits array.
const combinedFruits = fruits.concat(exoticFruits);

// Print the last two exotic fruits without altering the newly concatenated array.
console.log(combinedFruits.slice(-2));

// Monalissa said she needs help re-organizing her items in alphabetical order.
const monalissaIsMessy = ["pencil", "paper", "notebook", "computer"];
monalissaIsMessy.sort();

// Kevin accidentally stepped into the mirror world and needs help reversing his words.
const mirrorMirrorOnTheWall = ["all", "them", "of", "greatest", "the", "is", "who"];
mirrorMirrorOnTheWall.reverse();

console.log(fruits);
console.log(exoticFruits);
console.log(combinedFruits);
console.log(monalissaIsMessy);
console.log(mirrorMirrorOnTheWall);
// ===== HIGHER ORDER METHODS =====
// Rafael said he's trying to stop cursing so much, and he wants to start with his text messages. 
// Help him write code to eliminate the badword in his sentences. Must return a string sentence. Must use filter(). :)
const RafaelNoBadWords = "I am so tired of this badword food. I do not want this badword badword food.";

const filteredSentence = RafaelNoBadWords.split(' ').filter(word => word.toLowerCase() !== 'badword').join(' ');

console.log(filteredSentence);

// Man math is hard. Let's make our computer do it for us. 
// Use reduce() to find the total of the numbers in numbersToAddUp
const numbersToAddUp = [99, 5677, 232, 84, 2, 231];

const total = numbersToAddUp.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(total);

// ===== SPREAD OPERATOR ===== 
// Create a variable and assign a value of a copied array using the spread operator
const originalArray = [1, 2, 3, 4, 5];
const copiedArray = [...originalArray];

console.log(copiedArray);

// Create two arrays with any elements and connect both of them using the spread operator. 
// Save the connected arrays into a new variable.
const array1 = ['apple', 'banana', 'orange'];
const array2 = ['carrot', 'grape', 'kiwi'];

const connectedArrays = [...array1, ...array2];

console.log(connectedArrays);

// Using the variable with the newly connected arrays, use spread operator to add something at the end.
const newArrayWithEndAddition = [...connectedArrays, 'pineapple'];

console.log(newArrayWithEndAddition);

// Using the variable with the newly connected arrays, use spread operator to add something at the beginning.
const newArrayWithBeginningAddition = ['strawberry', ...connectedArrays];

console.log(newArrayWithBeginningAddition);
