let todos = [
  { id: 1, title: "Oddać projekt", done: false },
  { id: 2, title: "Przeczytać rozdział", done: true },
  { id: 3, title: "Przygotować prezentację", done: false }
];

// dodanie zadania
function addTodo(list, newTitle) {
  const newTask = {
    id: Date.now(),
    title: newTitle,
    done: false
  };

  return [...list, newTask];
}

// oznaczenie jako wykonane
function markAsDone(list, id) {
  return list.map(item =>
    item.id === id ? { ...item, done: true } : item
  );
}

// tylko niewykonane
function getUndone(list) {
  return list.filter(item => !item.done);
}

// test
const updatedList = addTodo(todos, "Zrobić zakupy");
const doneList = markAsDone(updatedList, 1);
const undoneList = getUndone(doneList);

console.log("Lista po dodaniu:");
console.log(updatedList);

console.log("\nLista po oznaczeniu jako wykonane:");
console.log(doneList);

console.log("\nNiewykonane zadania:");
console.log(undoneList);
