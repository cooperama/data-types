console.log('--------------------------------------');
console.log('Mixed Data Types HW');
console.log('--------------------------------------');

// ## The questions!
console.log('--------------------------------------');
console.log('1. Data types');
console.log('--------------------------------------');
// ### 1. Data types

// #### Refresher

// So far we have seen:

// * Strings
// * Numbers
// * Booleans
// * Arrays
// * Objects

// When these datatypes are combined, we get a **data structure**, for example, an array that contains objects that each contain booleans.

// Suppose you are tasked with creating some software, and it is up to **you** to determine which datatypes and what data structure to use.  For each of the following, write which **data types** you would use to represent the data, and then give a small example of the **data structure**:


  // * A light switch that can be either on or off.
  // -- boolean

  const lightsOn = false;

  // * A user's email address.
  // -- string

  const userEmail = 'useremail@place.com';

  // * A spaceship with a hull, laser blasters, tractor beam, and warp drive.
  // -- object

  const spaceship = {
    hull: 'large',
    laserBlasters: 20,
    tractorBeam: false,
    warpDrive: true
  };

  // * A list of student names from our class.
  // -- array

  const students = [
    'Jia',
    'Britt',
    'Brendan',
    'Cirrus',
    'Laura'
  ];

  // * A list of student names from our class, each with a location.
  // -- array of objects

  const studentsLocations = [
    {name: 'Jia', location: 'Seattle'},
    {name: 'Britt', location: 'Seattle'},
    {name: 'Ben', location: 'Seattle'}
  ];

  // * A list of student names from our class, each with a location and each with a list of favorite tv shows.
  // -- array of objects with strings and an array

  const studentsLocationsFaves = [
    {name: 'Jia', location: 'Seattle', favShows: ['Black Mirror', 'Breaking Bad', 'Futurama']},
    {name: 'Josh', location: 'Seattle', favShows: ['Black Mirror', 'Breaking Bad', 'Futurama']},
    {name: 'Nitish', location: 'Seattle', favShows: ['Black Mirror', 'Breaking Bad', 'Futurama']}
  ];



// ---

// &#x1F534; **Commit:** "data types"

// ---
console.log('--------------------------------------');
console.log('2. Take it Easy');
console.log('--------------------------------------');
// ### 2. Take it Easy

// 1. Make an array that holds all of the colors of the rainbow.
const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];

// 2. Write code that will access "blue" from the rainbow array.
const blue = rainbowColors[4];
console.log(blue)

// 3. Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
const jia = {
  favFood: 'taco salad',
  hobby: 'cooking',
  town: 'Seattle',
  favDataType: 'objects'
}

// 4. Write code that will access your hobby from the object that you just created.
const hobby = jia.hobby;
console.log(hobby);

// ---

// &#x1F534; **Commit:** "data structures"

// ---

console.log('--------------------------------------');
console.log('3. Crazy Object!');
console.log('--------------------------------------');
// ### 3. Crazy Object!

// ```javascript
const crazyObject = {
  taco: [
    {
      meat: 'steak',
      cheese: ['panela', 'queso', 'chihuahua']
    },
    {
      meat: 'chicken',
      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
}
// ```

// // Use crazyObject to log the following.

// //   * "omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5]);

// //   * "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);

// //   * "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby);

// //   * "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);

// //   * The object the contains the name `funkhauser`
console.log(crazyObject.larry.characters[1].name);

// // ---

// // &#x1F534; **Commit:** "crazyObject"

// // ---

console.log('--------------------------------------');
console.log('4. Object-ception');
console.log('--------------------------------------');
// // ### 4. Object-ception

// // With the following object:

// // ```js
const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}
// ```

// Change the value of `limbo` to `null`.
inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);
// ---

// &#x1F534; **Commit:** "object-ception"

// ---

console.log('--------------------------------------');
console.log('5. Create a new array called `bondTitles` with only the titles of the Bond films, and console.log the new array.ata Types');
console.log('--------------------------------------');
// ### 5-7. Bond Films

// Copy the following `bondFilms` **array** of **objects** above into your js file. Use loops and conditionals and functions in order to complete the below:

// ```js
const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];
// ```


// 5. Create a new array called `bondTitles` with only the titles of the Bond films, and console.log the new array.
const bondTitles = [];
for (let i = 0; i < bondFilms.length; i++) {
  bondTitles.push(bondFilms[i].title);
}
console.log(bondTitles);


//   &#x1F534; **Commit:** "bondTitles array"

console.log('--------------------------------------');
console.log('6. Create a new array `oddBonds`, of only the Bond films released on odd-numbered years.');
console.log('--------------------------------------');
// 6. Create a new array `oddBonds`, of only the Bond films released on odd-numbered years.
const oddBonds = [];
for (let i = 0; i < bondFilms.length; i++) {
  if (bondFilms[i].year % 2 === 1)
  oddBonds.push(bondFilms[i]);
}
console.log(oddBonds);



//   &#x1F534; **Commit:** "oddBonds"

console.log('--------------------------------------');
console.log('7. Determine the total cumulative gross of the Bond franchise, and console.log the result. ');
console.log('--------------------------------------');
// 7. Determine the total cumulative gross of the Bond franchise, and console.log the result. 
//   > _Hint_: To make the grosses into usable numbers, look into the `.replace` Javascript method (there are many ways to do this, however). Look into `parseInt()` also.  

let cumulativeGross = 0;
let gross;
let regex = /[$,]/g;
for (let i = 0; i < bondFilms.length; i++) {
  gross = bondFilms[i].gross;
  gross = gross.replaceAll(regex, '');
  cumulativeGross += parseInt(gross);
}
console.log(cumulativeGross);


//   &#x1F534; **Commit:** "bond films gross"



// #### Congrats! You have completed the homework

// <br>
// <hr>
console.log('--------------------------------------');
console.log('Hungry For More');
console.log('--------------------------------------');
// # Hungry For More?


// #### Console log the single movie **object** that contains the actor who starred in the least number of films.

// Expected result:

// ```js
// { 
//   "title" : "On Her Majesty's Secret Service", 
//   "year" : 1969, 
//   "actor" : "George Lazenby", 
//   "gross" : "$505,899,782" 
// }
// ```

// count number of films each actor starred in and save into objeect
const actorsObj = {};
for (let i = 0; i < bondFilms.length; i++) {
  // if (!actorsObj[bondFilms[i].actor]) {
  //   actorsObj[bondFilms[i].actor] = 1;
  // } else {
  //   actorsObj[bondFilms[i].actor] += 1;
  // }
  actorsObj[bondFilms[i].actor] 
    ? actorsObj[bondFilms[i].actor] += 1 
    : actorsObj[bondFilms[i].actor] = 1;
}


// find the actor that appeared in fewest films
let appearances = Object.values(actorsObj);   // array of values (each actor's appearances)
let star = Object.keys(actorsObj);            // array of actors

let leastFilms = Math.max(...appearances);    // max num of appearances by an actor
let leastFilmsActor;                          // the corresponding actor to the fewest appearances

for (let i = 0; i < star.length; i++) {       // loop to adjust above vars
  if (actorsObj[star[i]] < leastFilms) {
    leastFilms = actorsObj[star[i]];
    leastFilmsActor = star[i];
  }
}

// find the object belonging to the actor who starred in the fewest films
for (let i = 0; i < bondFilms.length; i++) {
  if (bondFilms[i].actor === leastFilmsActor) {
    console.log(bondFilms[i])
  }
}






// > _hint:_ Objects by definition have **unique** keys. Later in the problem you could create a new object wherein all the Bond actors are keys, and unique, with no doubles. _hint within a hint:_ If you need to iterate over an object, remember you can use [`Object.keys()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) or a [`for ... in` loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

// &#x1F534; **Commit** "humdinger"
// <hr>

// # Hungry For Quite a bit more?

// Complete this [advanced object lab using weather data](https://git.generalassemb.ly/sf-sei-3/weather-object-lab), committing as you go.

// ## Hungry for CSS stuff?

// Some tasty CSS videos:

// * [Box Model](https://www.youtube.com/watch?v=HNgdhp1_kEE&index=6&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J), 7:17
// * [CSS Display](https://www.youtube.com/watch?v=qjSe_K3agYc&index=7&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J), 6:24
// * [Positioning](https://www.youtube.com/watch?v=zH8kjJdvmOs&index=8&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J), 11:57
// * [Units of measure I](https://www.youtube.com/watch?v=5axuSSBIMuQ&index=9&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J), 10:25
// * [Units of measure II](https://www.youtube.com/watch?v=ZfxNpQm6m2g&index=10&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J), 14:27

