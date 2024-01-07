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



