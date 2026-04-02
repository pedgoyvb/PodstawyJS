const cart = [
  { name: "Chleb", price: 4.5, quantity: 2 },
  { name: "Ser", price: 9.9, quantity: 1 },
  { name: "Sok", price: 6.2, quantity: 3 }
];

const discountThreshold = 30;
const discountPercent = 10;

// wartość każdej pozycji
const itemsWithTotal = cart.map(item => ({
  ...item,
  total: item.price * item.quantity
}));

// suma koszyka
const totalSum = itemsWithTotal.reduce((sum, item) => sum + item.total, 0);

// opisy pozycji
const descriptions = itemsWithTotal.map(
  item => `${item.quantity} x ${item.name} = ${item.total.toFixed(2)} PLN`
);

// rabat
let finalPrice = totalSum;

if (totalSum > discountThreshold) {
  const discount = (totalSum * discountPercent) / 100;
  finalPrice = totalSum - discount;
}

// dodatkowe rozszerzenie: ile zaoszczędzono
const saved = totalSum - finalPrice;

console.log("Koszyk:");
descriptions.forEach(desc => console.log(desc));

console.log(`\nSuma przed rabatem: ${totalSum.toFixed(2)} PLN`);
console.log(`Suma po rabacie: ${finalPrice.toFixed(2)} PLN`);
console.log(`Zaoszczędzono: ${saved.toFixed(2)} PLN`);
