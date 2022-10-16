
var movies = ["Frozen", "Demon Slayer", "Epic", "Lucy", "Lord of Rings"];
window.console.log(movies[1]);

var movies = [];
movies[0] = "Frozen";
movies[1] = "Demon Slayer";
movies[2] = "Epic";
movies[3] = "Lucy";
movies[4] = "Lord of Rings";
window.console.log(movies[0]);

var movies = ["Frozen", "Demon Slayer", "Epic", "Lucy", "Lord of Rings"];
movies[movies.length] = "Kites";
window.console.log(movies.length);

var movies = [];
movies[0] = "Frozen";
movies[1] = "Demon Slayer";
movies[2] = "Epic";
movies[3] = "Lucy";
movies[4] = "Lord of Rings";
delete movies[0];
window.console.log(movies);

var movies = [];
movies[0] = "Frozen";
movies[1] = "Demon Slayer";
movies[2] = "Epic";
movies[3] = "Lucy";
movies[4] = "Lord of Rings";
movies[5] = "Kites";
movies[6] = "Notebook";

var i;
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}

var movies = [];
movies[0] = "Frozen";
movies[1] = "Demon Slayer";
movies[2] = "Epic";
movies[3] = "Lucy";
movies[4] = "Lord of Rings";
movies[5] = "Kites";
movies[6] = "Notebook";

var element;
for (element in movies) {
    if (movies.hasOwnProperty(element)) {
        window.console.log(movies[element]);
    }
}

var movies = [];
movies[0] = "Frozen";
movies[1] = "Demon Slayer";
movies[2] = "Epic";
movies[3] = "Lucy";
movies[4] = "Lord of Rings";
movies[5] = "Kites";
movies[6] = "Notebook";
movies.sort();

var element;
for (element in movies) {
    if (movies.hasOwnProperty(element)) {
        window.console.log(movies[element]);
    }
}

var movies = [];
movies[0] = "Frozen";
movies[1] = "Demon Slayer";
movies[2] = "Epic";
movies[3] = "Lucy";
movies[4] = "Lord of Rings";
movies[5] = "Kites";
movies[6] = "Notebook";

window.console.log("Movies I like:\n\n");
var element;
for (element in movies) {
    if (movies.hasOwnProperty(element)) {
        window.console.log(movies[element]);
    }
}

var leastFavMovies = [];
leastFavMovies[0] = "IT";
leastFavMovies[1] = "Green Snake";
leastFavMovies[2] = "Dear Jindaji";

window.console.log("\n\nMovies I regret watching:\n\n");
var element;
for (element in leastFavMovies) {
    if (leastFavMovies.hasOwnProperty(element)) {
        window.console.log(leastFavMovies[element]);
    }
}

var movies = [];
movies[0] = "Frozen";
movies[1] = "Demon Slayer";
movies[2] = "Epic";
movies[3] = "Lucy";
movies[4] = "Lord of Rings";
movies[5] = "Kites";
movies[6] = "Notebook";

var leastFavMovies = [];
leastFavMovies[0] = "IT";
leastFavMovies[1] = "Green Snake";
leastFavMovies[2] = "Dear Jindaji";

movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();
var element;
for (element in movies) {
    if (movies.hasOwnProperty(element)) {
        window.console.log(movies[element]);
    }
}


var movies = [];
movies[0] = "Frozen";
movies[1] = "Demon Slayer";
movies[2] = "Epic";
movies[3] = "Lucy";
movies[4] = "Lord of Rings";
movies[5] = "Kites";
movies[6] = "Notebook";

var leastFavMovies = [];
leastFavMovies[0] = "IT";
leastFavMovies[1] = "Green Snake";
leastFavMovies[2] = "Dear Jindaji";

movies = movies.concat(leastFavMovies);
window.console.log(movies.pop());
