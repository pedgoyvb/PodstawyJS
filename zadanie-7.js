const repairsList = [
  { id: 1, client: "Anna", device: "laptop", status: "nowe" },
  { id: 2, client: "Piotr", device: "telefon", status: "w trakcie" },
  { id: 3, client: "Ola", device: "tablet", status: "zakończone" }
];

// znajdź zgłoszenie o id = 2
const foundRepair = repairsList.find(item => item.id === 2);

console.log("Znalezione zgłoszenie:");
console.log(foundRepair);

// aktualizacja statusu BEZ mutowania
const updatedRepairs = repairsList.map(item =>
  item.id === 2
    ? { ...item, status: "zakończone" } // spread + zmiana pola
    : item
);

// policz ile jest "w trakcie"
const inProgressCount = updatedRepairs.filter(item => item.status === "w trakcie").length;

console.log("\nOryginalna tablica:");
console.log(repairsList);

console.log("\nZaktualizowana tablica:");
console.log(updatedRepairs);

console.log(`\nLiczba zgłoszeń w trakcie: ${inProgressCount}`);
