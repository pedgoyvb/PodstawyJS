const hasLaptop = true;
const hasCharger = false;
const hasNotebook = true;
const dayType = "laboratorium";

// sprawdzenie gotowości
let isReady;

if (hasLaptop && hasNotebook) {
  isReady = true;
} else {
  isReady = false;
}

// komunikat (operator trójargumentowy)
const statusMessage = isReady ? "Student jest gotowy na zajęcia" : "Student nie jest gotowy";

console.log(statusMessage);

// ostrzeżenie (&&)
!hasCharger && console.log("Uwaga: brak ładowarki!");

// komunikat zależny od dnia
if (dayType === "laboratorium") {
  console.log("Dziś zajęcia praktyczne – laptop obowiązkowy.");
} else {
  console.log("Dziś wykład – notatnik wystarczy.");
}

// rozszerzenie: dodatkowy warunek
if (!hasLaptop) {
  console.log("Bez laptopa możesz mieć problem na zajęciach.");
}
