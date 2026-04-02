const weeklyExpenses = [19.5, 45, 12.99, 30, 55.2, 22, 38.5];

// suma wydatków
const total = weeklyExpenses.reduce((sum, value) => sum + value, 0);

// średnia
const average = total / weeklyExpenses.length;

// największy wydatek
const maxExpense = Math.max(...weeklyExpenses);

// dodatkowe rozszerzenie: najmniejszy wydatek
const minExpense = Math.min(...weeklyExpenses);

console.log(`Suma wydatków: ${total.toFixed(2)} PLN`);
console.log(`Średni wydatek: ${average.toFixed(2)} PLN`);
console.log(`Największy wydatek: ${maxExpense} PLN`);
console.log(`Najmniejszy wydatek: ${minExpense} PLN`);
