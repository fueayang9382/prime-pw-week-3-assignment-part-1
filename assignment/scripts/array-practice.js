console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');
let carBrand = [ 'toyota', 'honda', 'ford', 'gmc', 'subaru'];
console.log( carBrand);
// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1.a. TODO: Make an array with some favorite foods
let favoriteFoods = ['pho', 'fried rice', 'steak', 'pad thai']

// 1.b. TODO: Log your array of foods to the console with a message, similar 
//      to the example above
console.log('these are my favorite food:', favoriteFoods);


// 2. Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---');

console.log('my car brand length is:', carBrand.length)

// Example: How many animals are in the array? 
console.log('Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array

console.log('my favorite food list', favoriteFoods.length);

// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');
console.log('last car in car brand is:', carBrand[4] );
// Example: Log the first animal from the array using it's array index

console.log('First animal is', animalArray[0])

// 3.a. TODO: Log the second animal in the array 
console.log('second animal in animalArray is:', animalArray[1]);

// 3.b. TODO: Log the last animal in the array using it's array index 

console.log('last animal in animalArray is:', animalArray[3]);

// 3.c. (STRETCH) TODO: Log the last animal by using the array length, 
//      instead of the exact index number of the last item
console.log('"varX.slice(-1)" formula will get me the last index item name without the index number. ');
console.log(animalArray.slice(-1)); 
console.log('OR we can do this way.');
console.log('this is the last animal!!!:', animalArray [animalArray.length -1]);
console.log('^^^what is the difference between the two? is one right or wrong?');
// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
console.log('formual "varX.push("newItem");" will add a new item to the array')
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);
console.log('this animal was added last into animalArray', animalArray [animalArray.length -1]);
// 4.a. TODO: Add a new food at the end of your array & log the array
favoriteFoods.push('ramen');
console.log('updated list of favoriteFoods is:', favoriteFoods);
console.log('this food dish was added to the end of favoriteFoods', favoriteFoods.slice(-1));

// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array & 
//      log both the food removed and the updated array

let removedFood = favoriteFoods.pop();
console.log('"varX.pop();" formual was use to removed last item from the array.');
console.log('removed last food from favoriteFood', removedFood);
console.log('this is the new update after the removed.', favoriteFoods); 

// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array
console.log('formula "varX.unshift(" ");" will add item to the top array.');
favoriteFoods.unshift('sushi');
console.log(favoriteFoods);

// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d TODO: Remove the food at the beginning of your array & 
//     log both the food removed and the updated array

let removeTopFood = favoriteFoods.shift(); 
console.log('I remove this top food from favoriteFoods', removeTopFood);
console.log(favoriteFoods);

// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.

favoriteFoods[1] ='eggroll'
console.log(favoriteFoods);

// 4.f (STRETCH) TODO: Sort your favoriteFoods array
//     in reverse alphabetical order. Log the array.

    console.log('varX.sort(function(a, b) {return a === b ? 0 : a < b ? -1 : 1', 'will place item in alphabetical order.')
    console.log('^^^can you describle what this version mean?^^^');
favoriteFoods.sort(function name(a,b) {
    return a === b ? 0 : a < b ? -1: 1
})
console.log(favoriteFoods);
favoriteFoods.reverse();
console.log(favoriteFoods);
console.log('^^^can you describle what this version mean?^^^');
console.log('Or we can do this!!!');

favoriteFoods.sort();
favoriteFoods.reverse();
console.log(favoriteFoods);




// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.
//const myNewString = myArray.join(',');
//myNewString;

let favoriteFoodsString = favoriteFoods.join(',');
console.log(favoriteFoods);


// 4.h (STRETCH) TODO: Make a new array that combines 
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']
console.log('formula to combine two arrays is " console.log(arrayone.concat(arraytwo);');
let arrayOne = favoriteFoods;
let arrayTwo = animalArray;

console.log(arrayOne.concat(arrayTwo));