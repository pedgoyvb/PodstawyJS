const tripCosts = [
  { label: "nocleg", amount: 420, paidBy: "Anna" },
  { label: "paliwo", amount: 260, paidBy: "Piotr" },
  { label: "jedzenie", amount: 180, paidBy: "Anna" },
  { label: "bilety", amount: 140, paidBy: "Ola" }
];

// całkowity koszt
const totalCost = tripCosts.reduce((sum, item) => sum + item.amount, 0);

// suma wydatków na osobę
const perPerson = tripCosts.reduce((acc, item) => {
  if (!acc[item.paidBy]) {
    acc[item.paidBy] = 0;
  }
  acc[item.paidBy] += item.amount;
  return acc;
}, {});

// kto zapłacił najwięcej
let maxPerson = null;
let maxAmount = 0;

for (const person in perPerson) {
  if (perPerson[person] > maxAmount) {
    maxAmount = perPerson[person];
    maxPerson = person;
  }
}

// rozszerzenie: podział kosztów
const peopleCount = Object.keys(perPerson).length;
const perPersonShare = totalCost / peopleCount;

const settlements = {};

for (const person in perPerson) {
  settlements[person] = Number((perPerson[person] - perPersonShare).toFixed(2));
}

console.log("Całkowity koszt:", totalCost, "PLN");
console.log("\nKoszty na osobę:");
console.log(perPerson);

console.log(`\nNajwięcej zapłacił: ${maxPerson} (${maxAmount} PLN)`);

console.log("\nRozliczenie (ile kto powinien oddać / dostać):");
console.log(settlements);
