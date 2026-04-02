const schedule = [
  { day: "poniedziałek", subject: "Programowanie", room: "A12", online: false },
  { day: "wtorek", subject: "Bazy danych", room: "online", online: true },
  { day: "czwartek", subject: "Grafika", room: "B03", online: false },
  { day: "piątek", subject: "UX", room: "online", online: true }
];

// zajęcia dla danego dnia
function getByDay(day) {
  return schedule.filter(item => item.day === day);
}

// opis zajęć
function formatSchedule(list) {
  return list.map(item => {
    const type = item.online ? "online" : "stacjonarne";
    return `${item.subject} — ${item.room} — ${type}`;
  });
}

// liczba wszystkich zajęć
const totalClasses = schedule.length;

// rozszerzenie: tylko zajęcia online
function getOnlineClasses() {
  return schedule.filter(item => item.online);
}

// test
const monday = getByDay("poniedziałek");

console.log("Zajęcia w poniedziałek:");
console.log(formatSchedule(monday));

console.log(`\nLiczba wszystkich zajęć: ${totalClasses}`);

console.log("\nZajęcia online:");
console.log(formatSchedule(getOnlineClasses()));
