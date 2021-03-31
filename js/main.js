"use strict";

let numberOfFilms; 

function start()
{
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms))
    {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
};




function rememberLastFilms()
{
    let i = 0;
    while (i < 2)
    {
        const lastSeenMovie = prompt('Один из последних просмотренных фильмов?', '');
        const rating = prompt('На сколько оцените его?', '');
        if (lastSeenMovie != null && rating != null && lastSeenMovie != '' && rating != '' && lastSeenMovie.length < 50 )
        {
            personalMovieDB.movies[lastSeenMovie] = rating;
            i++; 
        }
        
    }
}

rememberLastFilms();


function detectPersonalLevel()
{
    if (personalMovieDB.count < 10)
    {
        console.log('Просмотрено довольно мало фильмов');
    }
    else if (personalMovieDB.count < 30)
    {
        console.log('Вы классический зритель');
    }
    else if (personalMovieDB.count >= 30)
    {
        console.log('Вы киноман');
    }
    else
    {
        console.log('Произошла ошибка');
    }
}


function showMyDB(hidden)
{
    if(!hidden)
    {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres()
{
    for (let i = 1; i < 4; i++)
    {
        let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
        personalMovieDB[i-1] = genre;
    }
}

//console.log(personalMovieDB);