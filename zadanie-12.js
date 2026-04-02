const contacts = [
  { name: "Anna Nowak", phone: "500-100-200", city: "Katowice", favorite: true },
  { name: "Piotr Lis", phone: "501-300-700", city: "Sosnowiec", favorite: false },
  { name: "Ola Marek", phone: "502-400-900", city: "Katowice", favorite: true }
];

// kontakty z miasta
function getByCity(city) {
  return contacts.filter(contact => contact.city === city);
}

// ulubione kontakty
function getFavorites() {
  return contacts.filter(contact => contact.favorite);
}

// formatowanie
function formatContacts(list) {
  return list.map(contact => `${contact.name} — ${contact.phone}`);
}

// rozszerzenie: wyszukiwanie po fragmencie nazwy
function searchByName(fragment) {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(fragment.toLowerCase())
  );
}

// testy
console.log("Kontakty z Katowic:");
console.log(formatContacts(getByCity("Katowice")));

console.log("\nUlubione kontakty:");
console.log(formatContacts(getFavorites()));

console.log("\nWyszukiwanie po 'an':");
console.log(formatContacts(searchByName("an")));
