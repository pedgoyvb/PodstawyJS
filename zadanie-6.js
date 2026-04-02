const moviesList = [
  { title: "Arrival", category: "sci-fi", rating: 8.1, watched: true },
  { title: "Whiplash", category: "drama", rating: 8.5, watched: false },
  { title: "Dune", category: "sci-fi", rating: 8.0, watched: false },
  { title: "Inside Out", category: "animation", rating: 8.1, watched: true },
  { title: "Interstellar", category: "sci-fi", rating: 8.6, watched: false } // rozszerzenie
];

// filmy nieobejrzane
const notWatched = moviesList.filter(movie => !movie.watched);

// filmy z oceną > 8.0
const highRated = moviesList.filter(movie => movie.rating > 8.0);

// same tytuły (z wybranego zbioru – np. nieobejrzane)
const titles = notWatched.map(movie => movie.title);

console.log("Filmy nieobejrzane:");
console.log(notWatched);

console.log("\nFilmy z oceną > 8.0:");
console.log(highRated);

console.log("\nTytuły filmów do obejrzenia:");
console.log(titles);
