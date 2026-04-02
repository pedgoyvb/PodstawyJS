const activities = [
  { type: "bieg", minutes: 35, calories: 320 },
  { type: "rower", minutes: 50, calories: 410 },
  { type: "spacer", minutes: 20, calories: 90 },
  { type: "siłownia", minutes: 60, calories: 450 }
];

// łączny czas
const totalTime = activities.reduce((sum, act) => sum + act.minutes, 0);

// łączne kalorie
const totalCalories = activities.reduce((sum, act) => sum + act.calories, 0);

// aktywności > 30 min
const longActivities = activities.filter(act => act.minutes > 30);

// rozszerzenie: najbardziej kaloryczny trening
const mostCalories = activities.reduce((max, act) =>
  act.calories > max.calories ? act : max
);

// raport
const report = `
Raport aktywności:
Łączny czas: ${totalTime} minut
Łączne kalorie: ${totalCalories} kcal
Liczba dłuższych aktywności: ${longActivities.length}
Najbardziej intensywny trening: ${mostCalories.type} (${mostCalories.calories} kcal)
`;

console.log(report);
console.log("Dłuższe aktywności:");
longActivities.forEach(act =>
  console.log(`- ${act.type} (${act.minutes} min)`)
);
