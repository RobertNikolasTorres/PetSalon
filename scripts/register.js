console.log("Nico");

// Pet Registration:

// In the pets array, create 3 pets using object literals, each with the following properties:
// Name
// Age
// Gender
// Service
// Breed

// 2. Display Registered Pets Count:

// 3. Display Pet Names
// Create a JavaScript function that iterates through the pets array using a for loop.
// For each pet in the array, extract and display its name in the HTML. You can create an area in the HTML to list these names dynamically.

// 4. Styling and Content:

// Extra challenge: Create a function to calculate the average of the pet's ages.


//Using an array
// Property:Value
let pets = [
  {
    name: "Scooby",
    age: 80,
    gender: "Male",
    service: "Trim",
    breed: "Yorki",
  },
  {
    name: "Scrappy",
    age: 70,
    gender: "Male",
    service: "Trim",
    breed: "German Shepard",
  },
  {
    name: "Tweety",
    age: 85,
    gender: "Female",
    service: "Trim",
    breed: "Labrador",
  },
];

//display pet count and names.
console.log(pets.length)
console.log(pets[0].name)
console.log(pets[1].name)
console.log(pets[2].name)

//display pet count and names.
//document.write(`<p>${pets.length}</p>`);
//document.write(`<p>${pets[0].name}</p>`);
//document.write(`<p>${pets[1].name}</p>`);
//document.write(`<p>${pets[2].name}</p>`);


//display pet count and names.
function displayNames() {
  document.getElementById("pets").innerHTML += `<li>${pets.length} Pets currently registered.</li>`;
  document.getElementById("pets").innerHTML += `<li>${pets[0].name}</li>`;
  document.getElementById("pets").innerHTML += `<li>${pets[1].name}</li>`;
  document.getElementById("pets").innerHTML += `<li>${pets[2].name}</li>`;

}

// Extra challenge
function calculateAverage() {}

