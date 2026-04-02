const grades = [3.0, 4.0, 5.0, 3.5, 4.5];
const passingThreshold = 3.0;

function getStudentResult(gradesList) {
  const sum = gradesList.reduce((acc, grade) => acc + grade, 0);
  const average = sum / gradesList.length;

  const status = average >= passingThreshold ? "zaliczone" : "niezaliczone";

  let level;
  if (average >= 4.75) {
    level = "bardzo dobry";
  } else if (average >= 4.0) {
    level = "dobry";
  } else if (average >= 3.0) {
    level = "dostateczny";
  } else {
    level = "niedostateczny";
  }

  return {
    average: Number(average.toFixed(2)),
    status,
    level,
    gradesCount: gradesList.length,
  };
}

const result = getStudentResult(grades);

console.log("Wynik studenta:");
console.log(result);
console.log(`Średnia ocen: ${result.average}`);
console.log(`Status: ${result.status}`);
console.log(`Ocena opisowa: ${result.level}`);
console.log(`Liczba ocen: ${result.gradesCount}`);
