const studentProfile = {
  firstName: "Kamil",
  lastName: "Nowicki",
  city: "Gliwice",
  age: 22,
  fieldOfStudy: "informatyka",
  hobby: "nagrywanie z drona",
};

const fullName = `${studentProfile.firstName} ${studentProfile.lastName}`;
const adultStatus =
  studentProfile.age >= 18 ? "jest pełnoletni" : "nie jest pełnoletni";

console.log(`Pełne imię i nazwisko: ${fullName}`);
console.log(
  `${studentProfile.firstName} mieszka w mieście ${studentProfile.city} i studiuje ${studentProfile.fieldOfStudy}.`
);
console.log(
  `${studentProfile.firstName} ma ${studentProfile.age} lata, więc ${adultStatus}.`
);
console.log(
  `Dodatkowa informacja: hobby użytkownika to ${studentProfile.hobby}.`
);

// Komentarz:
// Co działa: kod tworzy obiekt użytkownika i wyświetla 4 komunikaty w konsoli.
// Rozszerzenie własne: dodałem własne pole hobby oraz dodatkowy komunikat.
// Największa trudność: dopasowanie treści komunikatów tak, aby były czytelne i nie były skopiowane 1:1 z przykładu.
