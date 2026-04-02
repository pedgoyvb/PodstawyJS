const defaultTasks = ["zajęcia", "zakupy", "trening"];

function createDayPlan(name, tasks = defaultTasks) {
  // rozszerzenie: numerowanie zadań
  const tasksList = tasks.map((task, index) => `${index + 1}. ${task}`);

  const message = `
Plan dnia dla ${name}:
${tasksList.join("\n")}

Łączna liczba zadań: ${tasks.length}
`;

  return message;
}

// wywołania funkcji
const plan1 = createDayPlan("Kamil");
const plan2 = createDayPlan("Ola", ["nauka", "spacer"]);

console.log(plan1);
console.log(plan2);
