// the function which takes functions as argument is known as a higher-order function

function boilWater(callback) {
  console.log("1. Boiling water...");

  setTimeout(() => {
    console.log("✅ Water boiled.");
    callback(); // jab kaam ho jaye to callback call karo
  }, 2000);
}

function addCoffeePowder(callback) {
  console.log("2. Adding coffee powder...");

  setTimeout(() => {
    console.log("✅ Coffee powder added.");
    callback();
  }, 1000);
}

function serveCoffee() {
  console.log("3. Serving coffee ☕️");
}

// Ab inhe chain karte hain
boilWater(() => {
  addCoffeePowder(() => {
    serveCoffee();
  });
});
