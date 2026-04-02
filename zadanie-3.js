const shoppingItems = [
  { name: "chleb", quantity: 2, urgent: true },
  { name: "mleko", quantity: 1, urgent: false },
  { name: "jajka", quantity: 10, urgent: true },
  { name: "makaron", quantity: 3, urgent: false },
  { name: "ser", quantity: 2, urgent: true } // rozszerzenie
];

// lista wszystkich produktów
console.log("Lista zakupów:");
shoppingItems.forEach(item => {
  console.log(`- ${item.name} (${item.quantity})`);
});

// tylko pilne
const urgentItems = shoppingItems.filter(item => item.urgent);

// nazwy wielkimi literami
const upperNames = shoppingItems.map(item => item.name.toUpperCase());

console.log("\nProdukty pilne:");
urgentItems.forEach(item => {
  console.log(`- ${item.name}`);
});

console.log("\nNazwy produktów (DUŻE LITERY):");
console.log(upperNames);

console.log(`\nLiczba produktów pilnych: ${urgentItems.length}`);
