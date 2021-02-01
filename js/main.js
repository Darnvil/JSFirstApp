"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', ''); 

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
};

for (let i = 0; i < 2; i++)
{
    const lastSeenMovie = prompt('Один из последних просмотренных фильмов?', '');
    const rating = prompt('На сколько оцените его?', '');
    personalMovieDB.movies[lastSeenMovie] = rating; 
}

console.log(personalMovieDB);